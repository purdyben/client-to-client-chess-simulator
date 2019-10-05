package com.app.accessingdatamysql;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="/testmysql") // This means URL's start with /testmysql (after Application path)
public class MainController {
	
	@Autowired
	private UserRepository userRepository;

	@GetMapping(value = "/all")
	public List<User> getAllUsers() {
		//return (List<User>) userRepository.findAll();
		List<User> list  = new  LinkedList<User>();
		list = (List<User>) userRepository.findAll();
		System.out.print(list.toString());
		return list;
	}
	@RequestMapping("/hello")
    String home() {
        return "Hello World - v3!";
    }
	@GetMapping("/getall")
	public @ResponseBody Iterable<User> getAll(){
		return userRepository.getAll();
	}
}	