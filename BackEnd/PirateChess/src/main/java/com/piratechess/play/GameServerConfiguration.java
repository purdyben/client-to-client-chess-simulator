package com.piratechess.play;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.server.standard.ServerEndpointExporter;

//stomp dependencies
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;


/**
 * 
 * @author Colby McKinley
 *
 */
@Configuration
public class GameServerConfiguration
{
	@Bean//(name = "gamebean")
	public ServerEndpointExporter serverEndpointExporter()
	{
		return new ServerEndpointExporter();
	}

}