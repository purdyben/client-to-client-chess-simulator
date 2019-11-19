
package com.piratechess.game;
import java.io.IOException;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import com.piratechess.play.GameServer;
import javax.websocket.*;
import static org.mockito.Mockito.*;
import org.mockito.InjectMocks;
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class GameTests {
	@InjectMocks
	GameServer server;
	
	@Test
	public void GameTest1() throws IOException {
		RemoteEndpoint.Basic endpoint = mock(RemoteEndpoint.Basic.class);
		Session session = mock(Session.class);
		Session session2 = mock(Session.class);
		Session session3 = mock(Session.class);
		when(session.getBasicRemote()).thenReturn(endpoint);
		when(session2.getBasicRemote()).thenReturn(endpoint);
		when(session3.getBasicRemote()).thenReturn(endpoint);
		assert(server.onOpen(session, "Gekyume").equals("Gekyume is waiting for a match."));
		assert(server.onOpen(session2, "Yeet").equals("Yeet assigned as black. Gekyume assigned as white."));
		assert(server.onMessage(session, "1").equals("1"));
		assert(server.onMessage(session2, "2").equals("2"));
		assert(server.onOpen(session3, "OddManOut").equals("OddManOut is waiting for a match."));
		assert(server.onMessage(session3, "3").equals("OddManOut has no opponent"));
		server.onClose(session);
		server.onClose(session2);
		server.onClose(session3);
	}
	/**
	 * Connecting two users then having one disconnect should disconnect the other
	 * @throws IOException
	 */
	@Test
	public void GameTest2() throws IOException {
		RemoteEndpoint.Basic endpoint = mock(RemoteEndpoint.Basic.class);
		Session session = mock(Session.class);
		Session session2 = mock(Session.class);
		Session session3 = mock(Session.class);
		when(session.getBasicRemote()).thenReturn(endpoint);
		when(session2.getBasicRemote()).thenReturn(endpoint);
		when(session3.getBasicRemote()).thenReturn(endpoint);
		server.onOpen(session, "Gekyume");
		server.onOpen(session2, "Yeet");
		server.onClose(session);
		assert(!session2.isOpen());
		server.onOpen(session2, "YeetMK2");
		server.onOpen(session3, "OddManNotSoOut");
		assert(server.onMessage(session3, "3").equals("3"));
	}
}
