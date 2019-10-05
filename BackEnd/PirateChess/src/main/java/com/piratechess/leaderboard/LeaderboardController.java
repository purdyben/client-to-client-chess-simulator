package com.piratechess.leaderboard;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.piratechess.user.IUserRepository;
import com.piratechess.user.User;
import com.piratechess.user.UserController;

/**
 * 
 * @author Colby McKinley
 *
 */
@RestController
@RequestMapping(path = "/leaderboard")
public class LeaderboardController {

	@Autowired
	public IUserRepository userRepository;
	private final Logger logger = LoggerFactory.getLogger(UserController.class);

	/**
	 * 
	 * @param classification
	 * @return - List of all users in database who are of rank {classification}
	 */
	@RequestMapping(method = RequestMethod.GET, path = "/classification/{classification}")
	public List<User> getAllUsers(@PathVariable("classification") String classification) {
		List<User> results = userRepository.findAll();
		logger.info("Number of Records Fetched:" + results.size());
		return results;
	}
}
