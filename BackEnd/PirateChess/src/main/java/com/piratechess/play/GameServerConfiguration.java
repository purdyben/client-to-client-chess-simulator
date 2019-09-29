package com.piratechess.play;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.server.standard.ServerEndpointExporter;

/**
 * 
 * @author Colby McKinley
 *
 */
@Configuration
public class GameServerConfiguration
{
	@Bean
	public ServerEndpointExporter serverEndpointExporter()
	{
		return new ServerEndpointExporter();
	}
	
}