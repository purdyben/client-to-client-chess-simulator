/**
package com.piratechess.game;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;

import java.io.IOException;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.piratechess.play.GameServerConfiguration;
import com.piratechess.play.GameServer;
import com.piratechess.user.User;

import javax.websocket.Session;
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class GameTests {
	@Autowired
	private GameServerConfiguration config;
	@Autowired
	private GameServer server = new GameServer();
	@Autowired
	private Session session;
	@Test
	public void onOpenTest() throws IOException {
		User a = new User("Ben", "BP", "benp@iastate.edu", "password", "master", 11);
		User b = new User("Gekyume", "BP", "ben@iastate.edu", "password", "master", 12);
		server.onOpen(session, a.getDisplayName());
		server.onOpen(session, b.getDisplayName());
		
		server.onMessage(session, "Bdb8");
		server.onClose(session);
	}
}
**/