package com.piratechess.play;

import com.piratechess.fileUtil.GameReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.ArrayList;
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

import com.piratechess.fileUtil.FileConstants;
import com.piratechess.fileUtil.ListFiles;

/**
 * Creates a text connection between two clients
 * 
 * @author Colby McKinley and Jonathan Vetting
 *
 */
@ServerEndpoint("/game/{userName}")
@Component
public class GameServer {
	/**
	 * Function which maps sessions to users
	 */
	private static Map<Session, String> sessionUsersMap = new LinkedHashMap<>();
	/**
	 * Function which maps users to session
	 */
	private static Map<String, Session> usersSessionMap = new LinkedHashMap<>();
	private static Map<String, String> whitePlayersMap = new LinkedHashMap<>();
	private static Map<String, String> blackPlayersMap = new LinkedHashMap<>();
	private static Map<String, String> gameMap = new LinkedHashMap<>();


	private final Logger logger = LoggerFactory.getLogger(GameServer.class);

	/**
	 * User enters game
	 * 
	 * @param session     - The session of the user who has entered the chat
	 * @param displayName - The of display name the user who wants to chat to
	 *                    others.
	 * @throws IOException
	 * @return String -used in GameTests.java
	 */
	@OnOpen
	public String onOpen(Session session, @PathParam("userName") String displayName) throws IOException {
		sessionUsersMap.put(session, displayName);
		usersSessionMap.put(displayName, session);
		/**
		 * Players are now mapped to games in pairs when they join the endpoint If there
		 * is now an odd of players, wait for another to join
		 */
		if (usersSessionMap.size() % 2 != 0) {
			logger.info(displayName + " is waiting for a match.");
			return displayName + " is waiting for a match.";
		}
		else {
			logger.info(displayName + " assigned as black. " + usersSessionMap.keySet().toArray()[usersSessionMap.size() - 2].toString() + " assigned as white.");
			/**
			 * The players are mapped to each other so that they don't have to type
			 * "@playername move" The players also cannot send moves to players outside of
			 * their game now
			 */
			whitePlayersMap.put(usersSessionMap.keySet().toArray()[usersSessionMap.size() - 2].toString(), displayName);
			blackPlayersMap.put(displayName, usersSessionMap.keySet().toArray()[usersSessionMap.size() - 2].toString());
			
			//String gameName = "GAME" + ListFiles.listFilesUsingDirectoryStream(FileConstants.GAME_LOG_DIRECTORY).size();
			/**
			 * Changed gameName to follow what GhostServer expects
			 */
			/**
			String gameName = "log" + ListFiles.listFilesUsingDirectoryStream(FileConstants.GAME_LOG_DIRECTORY).size() + ".txt";
			//String gameName = "log" + ListFiles.listFilesUsingDirectoryStream(FileConstants.GAME_LOG_LOCAL_DIRECTORY).size() +".txt";
			gameMap.put(usersSessionMap.keySet().toArray()[usersSessionMap.size() - 2].toString(), gameName);
			gameMap.put(usersSessionMap.keySet().toArray()[usersSessionMap.size() - 1].toString(), gameName);
			**/
			return displayName + " assigned as black. " + usersSessionMap.keySet().toArray()[usersSessionMap.size() - 2].toString() + " assigned as white.";
		}
	}

	/**
	 * 
	 * @param session
	 * @param move    - Algebraic notation of chess move
	 * @see https:en.wikipedia.org/wiki/Algebraic_notation_(chess)
	 * @throws IOException
	 * @return String move-used in GameTests.java
	 */
	@OnMessage
	public String onMessage(Session session, String move) throws IOException {
		logger.info("Move:" + move);
		String sendingUser = sessionUsersMap.get(session);
		logger.info(sendingUser);
		if(sendingUser == null) {
			logger.info("Disconnected");
			return "Disconnected";
		}
		/**
		String gameName = gameMap.get(sendingUser);
		FileWriter out = null;
		try {
			logger.info("Entered into writer: "+ gameName);
			out = new FileWriter(gameName);
			ArrayList<String> lines = GameReader.getFileAsArrayList(gameName);
			for (String l : lines)
			{
				out.write(l);
				logger.info(l);
			}
			out.write(move);
		} finally {
			if (out != null)
				out.close();
		}
		**/
		
		/*
		 * From the client side, move = "@" + {receiverUser} + " " + move
		 */
		String receivingUser = whitePlayersMap.get(sendingUser);
		logger.info(receivingUser);
		if (receivingUser == null)
			receivingUser = blackPlayersMap.get(sendingUser);
		if (receivingUser != null) {
			logger.info(receivingUser);
			sendMove(receivingUser, move);}
		else
			return sendingUser + " has no opponent";
		return move;
	}

	@OnClose
	public void onClose(Session session) throws IOException {
		String net_id = sessionUsersMap.get(session);
		logger.info(net_id + " Entered into Close");
		
		sessionUsersMap.remove(session);
		usersSessionMap.remove(net_id);
		
		if(usersSessionMap.get(whitePlayersMap.get(net_id))!=null)
			usersSessionMap.get(whitePlayersMap.get(net_id)).close();
		else if(usersSessionMap.get(blackPlayersMap.get(net_id))!=null)
			usersSessionMap.get(blackPlayersMap.get(net_id)).close();

		/**
		 * Remove opponent's session
		 */
		sessionUsersMap.remove(usersSessionMap.get(whitePlayersMap.get(net_id)));
		sessionUsersMap.remove(usersSessionMap.get(blackPlayersMap.get(net_id)));
		usersSessionMap.remove(whitePlayersMap.get(net_id));
		usersSessionMap.remove(blackPlayersMap.get(net_id));
		/**
		 * Remove user and opponent from player maps
		 */
		whitePlayersMap.remove(whitePlayersMap.get(net_id));
		whitePlayersMap.remove(net_id);
		
		blackPlayersMap.remove(blackPlayersMap.get(net_id));
		blackPlayersMap.remove(net_id);
		session.close();
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
