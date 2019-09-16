package com.example.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.app.entites.User;

@SpringBootApplication
public class SpringBootToMysqlTestApplication implements CommandLineRunner {
	
	@Autowired
	//private UserRepository userRepo ;
	public static void main(String[] args) {
		SpringApplication.run(SpringBootToMysqlTestApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.print("Gdvagddgfsergsbngsdrateabvgdsrtagshdgnrtw");
		
	}


}
