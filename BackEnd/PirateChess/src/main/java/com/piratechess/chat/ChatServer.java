package com.piratechess.chat;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

/**
 * Creates a chat server
 * 
 * @author Colby
 *
 */
@ServerEndpoint("/chat/{userName}")
@Component
public class ChatServer {
	/**
	 * Function which maps sessions to users
	 */
	private static Map<Session, String> sessionUsersMap = new HashMap<>();
	/**
	 * Function which maps users to session
	 */
	private static Map<String, Session> usersSessionMap = new HashMap<>();

	private final Logger logger = LoggerFactory.getLogger(ChatServer.class);

	/**
	 * User enters chat
	 * 
	 * @param session     - The session of the user who has entered the chat
	 * @param displayName - The of display name the user who wants to chat to
	 *                    others.
	 * @throws IOException
	 */
	@OnOpen
	public void onOpen(Session session, @PathParam("userName") String displayName) throws IOException {
		logger.info("Entered into Open");
		sessionUsersMap.put(session, displayName);
		usersSessionMap.put(displayName, session);
		String message = "User:" + displayName + " has Joined the Chat";
		broadcast(message);
	}

	/**
	 * We are only doing one-on-one conversations for now
	 * 
	 * @param session
	 * @param message
	 * @throws IOException
	 */
	@OnMessage
	public void onMessage(Session session, String message) throws IOException {
		logger.info("Entered into Message: Got Message:" + message);
		String sender_net_id = sessionUsersMap.get(session);
		/*
		 * From the client side, just do the following... message = "@" +
		 * {receiver_net_id} + " " + message;
		 */
		String receiver_net_id = message.split(" ")[0].substring(1);
		sendMessageToParticularUser(receiver_net_id, "[DM] " + sender_net_id + ": " + message);
		sendMessageToParticularUser(sender_net_id, "[DM] " + sender_net_id + ": " + message);
	}

	@OnClose
	public void onClose(Session session) throws IOException {
		logger.info("Entered into Close");
		String net_id = sessionUsersMap.get(session);
		sessionUsersMap.remove(session);
		usersSessionMap.remove(net_id);
		String message = net_id + " disconnected. :(";
		broadcast(message);
	}

	/**
	 * 
	 * @param session   - Session causing the trouble.
	 * @param throwable
	 */
	@OnError
	public void onError(Session session, Throwable throwable) {
		logger.info("Entered into Error");
	}

	/**
	 * Sends a message to a particular user.
	 * 
	 * @param receiver  - receiver display name
	 * @param message - message to be sent to the receiver
	 */
	private void sendMessageToParticularUser(String receiver, String message) {
		try {
			usersSessionMap.get(receiver).getBasicRemote().sendText(message);
		} catch (IOException e) {
			logger.info("Exception: " + e.getMessage().toString());
			e.printStackTrace();
		}
	}

	/**
	 * Sends a message to everyone.
	 * 
	 * @param message - Message to be sent
	 * @throws IOException
	 */
	private static void broadcast(String message) throws IOException {
		sessionUsersMap.forEach((session, user) -> {
			synchronized (session) {
				try {
					session.getBasicRemote().sendText(message);
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		});
	}
}
