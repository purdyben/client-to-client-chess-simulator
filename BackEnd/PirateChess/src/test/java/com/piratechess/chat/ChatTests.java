/**
package com.piratechess.chat;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;

import java.io.IOException;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.piratechess.chat.ChatConfiguration;
import com.piratechess.chat.ChatServer;
import com.piratechess.user.User;

import javax.websocket.Session;
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ChatTests {
	@Autowired
	private ChatConfiguration config;
	@Autowired
	private ChatServer server = new ChatServer();
	@Autowired
	private Session session;
	@Test
	public void onOpenTest() throws IOException {
		User a = new User("Ben", "BP", "benp@iastate.edu", "password", "master", 11);
		User b = new User("Gekyume", "BP", "ben@iastate.edu", "password", "master", 12);
		server.onOpen(session, a.getDisplayName());
		server.onOpen(session, b.getDisplayName());
		
		//onMessage only one to one right now
		server.onMessage(session, "@{Gekyume} Poo poo sinky");//user a send message to user b
		//close the chat
		server.onClose(session);
	}
}
**/