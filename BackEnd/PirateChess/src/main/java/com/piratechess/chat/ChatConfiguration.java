//package com.piratechess.chat;

//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.messaging.simp.config.MessageBrokerRegistry;
//import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
//import org.springframework.web.socket.server.standard.ServerEndpointExporter;

//stomp dependencies
//import org.springframework.messaging.simp.config.MessageBrokerRegistry;
//import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
//import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
//import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

/**
 * 
 * @author Colby McKinley
 *
 */
//@Configuration
//public class ChatConfiguration
//{
	/**
	@Override
	public void configureMessageBroker(MessageBrokerRegistry config) {
		config.enableSimpleBroker("/chat");
		config.setApplicationDestinationPrefixes("/app");//?
	}
	
	@Override
	public void registerStompEndpoints(StompEndpointRegistry registry) {
		registry.addEndpoint("/message").withSockJS();
		//.setAllowedOrigins("http://localhost:8080/").withSockJS();//?
		
	}
	//expects a STOMP message with a JSON object body such that:
	//{
	//"from":"Gekyume",
	//"text":"I can't find X"
	//}
	**/
	
	
	//@Bean(name="chatbean")
	//public ServerEndpointExporter serverEndpointExporter()
	//{
		//return new ServerEndpointExporter();
	//}
//}
