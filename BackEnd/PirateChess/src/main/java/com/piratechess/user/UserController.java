package com.piratechess.user;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
/**
 * 
 * @author Colby McKinley
 *
 */
@RestController
public class UserController {

	@Autowired
	public IUserRepository userRepository;
	private final Logger logger = LoggerFactory.getLogger(UserController.class);
	
	/**
	 * Saves a new user into the database.
	 * 
	 * @param user - The user being added.
	 * @return -  The user name of the user
	 */
	@RequestMapping(method = RequestMethod.POST, path = "/users/new", produces = "application/json")
	public String saveUser(@RequestBody User user)
	{
		userRepository.save(user);
		logger.info("Saved user: " + user.getUserName());
		return user.getUserName();
	}

	/**
	 * Gets a list of all the users in the database.
	 * 
	 * @return - A list of all the users in the database.
	 */
	@RequestMapping(method = RequestMethod.GET, path = "/users")
	public List<User> getAllUsers()
	{
		List<User> results = userRepository.findAll();
		logger.info("Number of Records Fetched:" + results.size());
		return results;
	}
	
	

}
