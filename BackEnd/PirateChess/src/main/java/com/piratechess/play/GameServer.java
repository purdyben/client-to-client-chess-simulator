package com.piratechess.play;

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
 * Creates a text connection between two clients
 * 
 * @author Colby McKinley
 *
 */
@ServerEndpoint("/game/{userName}")
@Component
public class GameServer {
	/**
	 * Function which maps sessions to users
	 */
	private static Map<Session, String> sessionUsersMap = new HashMap<>();
	/**
	 * Function which maps users to session
	 */
	private static Map<String, Session> usersSessionMap = new HashMap<>();

	private final Logger logger = LoggerFactory.getLogger(GameServer.class);

	/**
	 * User enters game
	 * 
	 * @param session     - The session of the user who has entered the chat
	 * @param displayName - The of display name the user who wants to chat to
	 *                    others.
	 * @throws IOException
	 */
	@OnOpen
	public void onOpen(Session session, @PathParam("userName") String displayName) throws IOException {
		logger.info(displayName + " has entered the game");
		sessionUsersMap.put(session, displayName);
		usersSessionMap.put(displayName, session);
	}

	/**
	 * 
	 * @param session
	 * @param move - Algebraic notation of chess move
	 * @see https://en.wikipedia.org/wiki/Algebraic_notation_(chess)
	 * @throws IOException
	 */
	@OnMessage
	public void onMessage(Session session, String move) throws IOException {
		logger.info("Entered into Message: Got Message:" + move);
		String sendingUser = sessionUsersMap.get(session);
		//File
		/*
		 * From the client side, just do the following... move = "@" +
		 * {receiverUser} + " " + move;
		 */
		String receivingUser = move.split(" ")[0].substring(1);
		sendMove(receivingUser, "[DM] " + sendingUser + ": " + move);
	}

	@OnClose
	public void onClose(Session session) throws IOException {
		logger.info("Entered into Close");
		String net_id = sessionUsersMap.get(session);
		sessionUsersMap.remove(session);
		usersSessionMap.remove(net_id);
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
	 * @param receiver - receiver display name
	 * @param message  - chess move (Algebraic notation)
	 */
	private void sendMove(String receiver, String move) {
		try {
			usersSessionMap.get(receiver).getBasicRemote().sendText(move);
		} catch (IOException e) {
			logger.info("Exception: " + e.getMessage().toString());
			e.printStackTrace();
		}
	}
}
