package com.piratechess.play;

import java.io.IOException;
//import java.util.HashMap;
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
	/**
	 * Function which maps player 1 to player 2
	 */
	private static Map<String, String> player1Map = new LinkedHashMap<>();
	/**
	 * Function which maps player 2 to player 1
	 */
	private static Map<String, String> player2Map = new LinkedHashMap<>();
	
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
		logger.info(displayName + " has entered matchmaking");
		sessionUsersMap.put(session, displayName);
		usersSessionMap.put(displayName, session);
		/**
		 * Players are now mapped to games in pairs when they join the endpoint
		 * If there is now an odd of players, wait for another to join
		 */
		if(usersSessionMap.size()%2!=0)
		{
			logger.info(displayName + " is waiting for a match.");
			sendMove(displayName, "Connected and waiting for a match");
		}
		/**
		 * If the amount of players is now even, match newest user with second newest user
		 */
		else
		{
			/**
			 * The players are mapped to each other so that they don't have to type "@playername move"
			 * The players also cannot send moves to players outside of their game now
			 */
			player1Map.put(usersSessionMap.keySet().toArray()[usersSessionMap.size()-2].toString(), displayName);//?
			player2Map.put(displayName, usersSessionMap.keySet().toArray()[usersSessionMap.size()-2].toString());
			sendMove(displayName, "Connected and found opponent: " + player2Map.get(displayName));
		}
	}

	/**
	 * 
	 * @param session
	 * @param move - Algebraic notation of chess move
	 * @see https:en.wikipedia.org/wiki/Algebraic_notation_(chess)
	 * @throws IOException
	 */
	@OnMessage
	public void onMessage(Session session, String move) throws IOException {
		logger.info("Entered into Message: Got Message:" + move);
		String sendingUser = sessionUsersMap.get(session);
		/*
		 * From the client side, just do the following... move = "@" +
		 * {receiverUser} + " " + move;
		 */
		//String receivingUser = move.split(" ")[0].substring(1);
		//sendMove(receivingUser, "[DM] " + sendingUser + ": " + move);
		
		/**
		 * From the client side, just do move
		 * No need to specify the receiving player
		 */
		String receivingUser = player1Map.get(sendingUser);
		if(receivingUser == null)
		{
			receivingUser = player2Map.get(sendingUser);
		}
		/**
		 * Another check to prevent player from sending moves
		 * when another player has not been found
		 */
		if(receivingUser != null)
		{
			sendMove(receivingUser, move);
		}
	}

	@OnClose
	public void onClose(Session session) throws IOException {
		logger.info("Entered into Close");
		String net_id = sessionUsersMap.get(session);
		
		/**
		 * Close opponent's session by recursively calling onClose
		 */
		//if(player1Map.get(net_id)!=null)
		//{
			//onClose(usersSessionMap.get(player1Map.get(net_id)));
		//}
		//else if(player2Map.get(net_id)!=null)
		//{
			//onClose(usersSessionMap.get(player2Map.get(net_id)));
		//}
			
		sessionUsersMap.remove(session);
		usersSessionMap.remove(net_id);
		
		player1Map.remove(net_id);
		player1Map.remove(player1Map.get(net_id));
		player2Map.remove(net_id);
		player2Map.remove(player2Map.get(net_id));
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
