package com.fastcare.users;

import org.springframework.data.annotation.Id;

public class User {

	@Id
	private long id;
	private String name = "";
	public User(String name) {
		this.name = name;
	}
	
	public String getName() {
		return this.name;
	}
}
