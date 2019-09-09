package com.fastcare.users;

import java.util.LinkedList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class UserController {
	
	@GetMapping("/getAllUsers")
	public List<User> getUserList() {
		User u = new User("Colby");
		List<User> userList = new LinkedList<>();
		userList.add(u);
		return userList;
	}
}
