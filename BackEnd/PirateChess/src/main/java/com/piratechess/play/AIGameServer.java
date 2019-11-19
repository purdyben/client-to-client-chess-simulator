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

import com.piratechess.gameUtil.Board;
import com.piratechess.gameUtil.Move;

/**
 * Creates a text connection between client and AI
 * 
 * @author Colby McKinley
 *
 */
@ServerEndpoint("/aigame/{userName}")
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
	private static Map<String, String> playerMap = new LinkedHashMap<>();
	private static Map<String, Game> boardMap = new LinkedHashMap<>();

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
		playerMap.put(usersSessionMap.keySet().toArray()[usersSessionMap.size() - 1].toString(), displayName);
		boardMap.put(displayName, new Game(null, null, new Board()));
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
		Move personMove = AIService.processMove(move);
		Move aiMove = null;
		AIService.play(boardMap.get(sendingUser), personMove, aiMove);
		/*
		 * From the client side, move = "@" + {receiverUser} + " " + move
		 */
		String receivingUser = playerMap.get(sendingUser);
		if (receivingUser != null)
			sendMove(receivingUser, aiMove.toString());
	}

	@OnClose
	public void onClose(Session session) throws IOException {
		logger.info("Entered into Close");
		String username = sessionUsersMap.get(session);
		if (playerMap.get(username) != null)
			onClose(usersSessionMap.get(playerMap.get(username)));
		sessionUsersMap.remove(session);
		usersSessionMap.remove(username);

		playerMap.remove(username);
		playerMap.remove(playerMap.get(username));
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
