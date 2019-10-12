package com.piratechess.leaderboard;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.Iterator;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.test.context.junit4.SpringRunner;

import com.piratechess.user.User;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class LeaderboardTests {
	@Autowired
	private LeaderboardController controller;
	
	@Test
	public void contexLoads() throws Exception {
		assertThat(controller).isNotNull();
		controller.userRepository.deleteAll();
	}


	@Test
	public void getUsersByClassifcationTest() {
		User a = new User("Colby", "BP", "benp@iastate.edu", "password", "master", 13);
		User b = new User("Ben", "BP", "ben@iastate.edu", "password", "master", 12);
		User c = new User("Elissa", "ES", "ellisa@iastate.edu", "password1", "master", 11);
		User d = new User("BenSmith", "BS", "bsmith@iastate.edu", "password2", "Class J", 1);
		controller.userRepository.save(a);
		controller.userRepository.save(b);
		controller.userRepository.save(c);
		controller.userRepository.save(d);
    	Page<User> actual = controller.getTopUsersByClassifcation("master", 2);
  
    	assertThat(actual.getSize() == 2);
    	assertThat(actual.getPageable().first() == a);
//    	assertThat(actual.contains(a));
//    	assertThat(actual.contains(b));
////    	assertThat(!actual.contains(c));
//    	assertThat(!actual.contains(d));
    	actual = controller.getTopUsersByClassifcation("Class J", 2);
    	assertThat(actual.getSize() == 1);
//    	assertThat(!actual.contains(a));
//    	assertThat(!actual.contains(b));
//    	assertThat(!actual.contains(c));
//    	assertThat(actual.contains(d));
		controller.userRepository.delete(a);
		controller.userRepository.delete(b);
		controller.userRepository.delete(c);
		controller.userRepository.delete(d);
	}

}
