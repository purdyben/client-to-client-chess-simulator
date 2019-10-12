package com.piratechess.leaderboard;

import java.util.Collection;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
	 * @param classification - @see {USCF rating categories}
	 * @return - List of all users in database who are of rank
	 *         {@link classification}
	 */
	@RequestMapping(method = RequestMethod.GET, path = "/classification/{classification}")
	public Collection<User> getUsersByClassifcation(@PathVariable("classification") String classification) {
		Collection<User> results = userRepository.findUsersByClassifcation(classification);
		logger.info("Number of Records Fetched:" + results.size());
		return results;
	}

	/**
	 * 
	 * @param classification - @see {USCF rating categories}
	 * @return - List of all users in database who are of rank
	 *         {@link classification}
	 */
	@RequestMapping(method = RequestMethod.GET, path = "/classification/{classification}/{limit}")
	public Page<User> getTopUsersByClassifcation(@PathVariable("classification") String classification,
			@PathVariable("limit") int limit) {
		Pageable p = PageRequest.of(0, limit);
		Page<User> top = userRepository.findUsersByClassifcationPagination(classification, p);
		return top;
	}

	/**
	 * 
	 * @param num -
	 * @return - List of top users, max size of num
	 */
	@RequestMapping(method = RequestMethod.GET, path = "/top/{num}")
	public List<User> getTopUsers(@PathVariable("num") int num) {
		List<User> results = userRepository.findAll();
		userRepository.findAll();
		logger.info("Number of Records Fetched:" + results.size());
		return results;
	}

}
