package com.app.accessingdatamysql;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "userTable")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)

	private String username;


	public User(){
		
	}
	public String getName() {
		return username;
	}
	public void setName(String name) {
		username = name;
	}

}
