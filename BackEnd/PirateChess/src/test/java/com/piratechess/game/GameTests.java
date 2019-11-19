package com.piratechess.game;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.io.IOException;

import javax.websocket.Session;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;

import com.piratechess.play.GameServer;

@RunWith(MockitoJUnitRunner.class)
public class GameTests {

	@Before
	public void setup() {
		MockitoAnnotations.initMocks(this);
	}

	@Test
	public void verifyCallToIsOpenConnection() {
		WebSocketSession session = mock(WebSocketSession.class);
		when(session.isOpen()).thenReturn(true);
        TextMessage textMsg = new TextMessage("FUCK ME IN THE ASS".getBytes());
		GameServer textHandler = new GameServer();
		try {
			textHandler.onMessage((Session) session, textHandler.toString());
			verify(session, times(1)).sendMessage(textMsg);

		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	@Test
	public void verifyCallToOnClose() {
		Session session = mock(Session.class);
		when(session.isOpen()).thenReturn(true);
		GameServer gameHandler = new GameServer();
		try {
			gameHandler.onClose(session);
			verify(gameHandler, times(1)).onClose(session);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	@Test
	public void verifyCallToGameFileName() {
		WebSocketSession session = mock(WebSocketSession.class);
		when(session.isOpen()).thenReturn(true);
		WebSocketMessage<String> msg = "FUCK ME IN THE ASS";
		GameServer textHandler = new GameServer();
		textHandler.onMessage((Session) session, msg.getPayload());
		verify(session, times(1)).sendMessage(msg);
	}
}
