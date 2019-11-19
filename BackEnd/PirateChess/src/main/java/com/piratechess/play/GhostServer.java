package com.piratechess.play;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.ArrayList;
import java.util.Random;
import java.util.HashSet;
import java.util.Set;

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
import com.piratechess.fileUtil.FileController;
import com.piratechess.fileUtil.FileDownload;
import com.piratechess.fileUtil.GameReader;
import com.piratechess.fileUtil.ListFiles;
import com.piratechess.fileUtil.UnzipFile;
import com.piratechess.fileUtil.ZipFile;
import com.piratechess.user.User;
/**
 * Creates a text connection between a player and a "ghost" player that replays a random stored game log
 * 
 * @author Jonathan Vetting
 *
 */
@ServerEndpoint("/game/ghost/{userName}")
@Component
public class GhostServer {
	/**
	 * Function which maps sessions to users
	 */
	private static Map<Session, String> sessionUsersMap = new HashMap<>();
	/**
	 * Function which maps users to session
	 */
	private static Map<String, Session> usersSessionMap = new HashMap<>();
	/**
	 * Function which maps userName to a game log
	 * Set only once for each user
	 * Accessed in onMessage
	 */
	private static Map<String, ArrayList<String>> usersMovesMap = new HashMap<>();
	/**
	 * Function which maps user to current move number
	 */
	private static Map<String, Integer> usersCurMoveMap = new HashMap<>();
	/**
	 * The Set listing all previously saved game logs
	 * Accessed and updated whenever a new player calls onOpen
	 */
	private static final Set<String> fileList = new HashSet<>(ListFiles.listFilesUsingJavaIO(FileConstants.GAME_LOG_DIRECTORY));
	//use this one when testing locally
	//private static final Set<String> fileList = new HashSet<>(ListFiles.listFilesUsingJavaIO(FileConstants.GAME_LOG_LOCAL_DIRECTORY));
	
	private final Logger logger = LoggerFactory.getLogger(GhostServer.class);
	
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
		logger.info(displayName + " has entered a game");
		sessionUsersMap.put(session, displayName);
		usersSessionMap.put(displayName, session);
		
		/**
		 * Select a random game log
		 * Save that game log and an index value of zero to the user key of moves and curMove maps
		 */
		Random rand = new Random();
		int selectedLog = rand.nextInt(fileList.size()-1)+1;//-1 to avoid log0 bc its a test
		logger.info(displayName + " playing against log #" + selectedLog);
		ArrayList<String>moves = GameReader.getFileAsArrayList(FileConstants.GAME_LOG_DIRECTORY + "log"+ selectedLog + ".txt");//+1 to avoid log0
		//ArrayList<String>moves = GameReader.getFileAsArrayList(FileConstants.GAME_LOG_LOCAL_DIRECTORY + "log"+ selectedLog + ".txt");
		usersMovesMap.put(displayName, moves);
		usersCurMoveMap.put(displayName, 0);
	}
	
	/**
	 * GhostPlayer receives move, then returns next moves in log
	 * @param session
	 * @param move - Algebraic notation of chess move
	 * @see https:en.wikipedia.org/wiki/Algebraic_notation_(chess)
	 * @throws IOException
	 */
	@OnMessage
	public String onMessage(Session session, String move) throws IOException {
		logger.info("Entered into Message: Got Message:" + move);
		String sendingUser = sessionUsersMap.get(session);
		logger.info("SendingUser:"+sendingUser);
		int curMove = usersCurMoveMap.get(sendingUser);
		logger.info("curMove:" + curMove + ":" + usersMovesMap.get(sendingUser).get(curMove));
		if(curMove < usersMovesMap.get(sendingUser).size())
		{
			String nextMove = usersMovesMap.get(sendingUser).get(curMove);
			/**
			 * Calculate if that move is viable
			 * If not, do nothing or do next move in log
			 * Should just be calculating if that space is taken or not based on the current game log being recorded for this game
			 */
			sendMove(sendingUser, nextMove);
			logger.info("Entered into reply: Sent Message:" + nextMove);
			curMove++;
			usersCurMoveMap.put(sendingUser, curMove);
			return nextMove;
		}
		return "No move to make";
	}

	@OnClose
	public void onClose(Session session) throws IOException {
		logger.info("Entered into Close");
		String net_id = sessionUsersMap.get(session);
		sessionUsersMap.remove(session);
		usersSessionMap.remove(net_id);
		
		usersMovesMap.remove(net_id);
		usersCurMoveMap.remove(net_id);
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
		logger.info(receiver + " Entered into send message");
		try {
			logger.info("Entered into try: " + usersSessionMap.get(receiver).getBasicRemote());
			usersSessionMap.get(receiver).getBasicRemote().sendText(move);
		} catch (IOException e) {
			logger.info("Exception: " + e.getMessage().toString());
			e.printStackTrace();
		}

	}
}
