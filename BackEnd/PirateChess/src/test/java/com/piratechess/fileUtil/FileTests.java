package com.piratechess.fileUtil;

import java.io.IOException;
import java.io.OutputStream;
import java.io.Writer;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;
import javax.websocket.*;
import static org.mockito.Mockito.*;
//import org.mockito.
import com.piratechess.play.GhostServer;
import com.piratechess.fileUtil.ListFiles;
/**
 * Tests involving GhostServer and fileUtil
 * @author Jonathan Vetting
 *
 */
@RunWith(MockitoJUnitRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class FileTests {
	private final Logger logger = LoggerFactory.getLogger(FileTests.class);

	@Mock
	ListFiles lister;
	@Mock
	MessageHandler.Whole<String> msgHandler;
	@InjectMocks
	GhostServer server;
	
	@Test
	public void GhostServerTest()
	{
        RemoteEndpoint.Basic endpoint = mock(RemoteEndpoint.Basic.class);
		Session session = mock(Session.class);
		when(session.getBasicRemote()).thenReturn(endpoint);
		try
		{
			MessageHandler.Whole<String> handler = new MessageHandler.Whole<String>() 
			{
				@Override
	            public void onMessage(String message)
				{
					logger.info("Test logger:" + message);
				}
			};
			session.addMessageHandler(handler);
			server.onOpen(session, "Gekyume");
			System.out.println(server.onMessage(session, "Rlg8"));
			System.out.println(server.onMessage(session, "Bb5+"));
			System.out.println(server.onMessage(session, "Bd7"));
		}
		catch(IOException ex) {
			System.out.println (ex.toString());
		}
	}
	
	@Test
	public void ListFilesTest()
	{
		final Set<String> files = new HashSet<>(ListFiles.listFilesUsingJavaIO(FileConstants.GAME_LOG_DIRECTORY));
		//final Set<String> files = new HashSet<>(ListFiles.listFilesUsingJavaIO(FileConstants.GAME_LOG_LOCAL_DIRECTORY));
		assert(files.size()>=3);
		
	}
	
	@Test
	public void GameReaderTest()
	{
		try
		{
			ArrayList<String>moves = GameReader.getFileAsArrayList(FileConstants.GAME_LOG_DIRECTORY + "log0.txt");
			//ArrayList<String>moves = GameReader.getFileAsArrayList(FileConstants.GAME_LOG_LOCAL_DIRECTORY + "log0.txt");
			logger.info(moves.get(0));
			assert(moves.get(0).equals("This is a test"));
		}
		catch(IOException ex)
		{
			logger.info("GameReaderTest failed: " + ex);
		}
	}
	
}