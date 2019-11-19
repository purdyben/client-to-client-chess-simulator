package com.piratechess.play;

import java.io.IOException;
import java.util.LinkedHashMap;
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
 * Creates a text connection between client and AI
 * 
 * @author Colby McKinley
 *
 */
@ServerEndpoint("/game/{userName}")
@Component
public class AIGameServer {

	/*
	 * Function which maps sessions to users
	 */
	private static Map<Session, String> sessionUsersMap = new LinkedHashMap<>();
	/**
	 * Function which maps users to session
	 */
	private static Map<String, Session> usersSessionMap = new LinkedHashMap<>();
	private static Map<String, String> whitePlayersMap = new LinkedHashMap<>();
	private final Logger logger = LoggerFactory.getLogger(AIGameServer.class);

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
		sessionUsersMap.put(session, displayName);
		usersSessionMap.put(displayName, session);
		whitePlayersMap.put(usersSessionMap.keySet().toArray()[usersSessionMap.size() - 1].toString(), displayName);
	}

	/**
	 * 
	 * @param session
	 * @param move    - Algebraic notation of chess move
	 * @see https:en.wikipedia.org/wiki/Algebraic_notation_(chess)
	 * @throws IOException
	 */
	@OnMessage
	public void onMessage(Session session, String move) throws IOException {
		logger.info("Move:" + move);
		String sendingUser = sessionUsersMap.get(session);
		String aiMove = AIService.processMove(move);
		/*
		 * From the client side, move = "@" + {receiverUser} + " " + move
		 */
		String receivingUser = whitePlayersMap.get(sendingUser);
		if (receivingUser != null)
			sendMove(receivingUser, aiMove);
	}

	@OnClose
	public void onClose(Session session) throws IOException {
		logger.info("Entered into Close");
		String username = sessionUsersMap.get(session);
		if (whitePlayersMap.get(username) != null)
			onClose(usersSessionMap.get(whitePlayersMap.get(username)));
		sessionUsersMap.remove(session);
		usersSessionMap.remove(username);

		whitePlayersMap.remove(username);
		whitePlayersMap.remove(whitePlayersMap.get(username));
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
