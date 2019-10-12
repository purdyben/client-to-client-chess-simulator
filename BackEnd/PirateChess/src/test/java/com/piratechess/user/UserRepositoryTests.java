package com.piratechess.user;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;

import java.util.Collection;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class UserRepositoryTests {
	
	@Autowired
	private IUserRepository repo;
	
	@Test
	public void contexLoads() throws Exception {
		assert(repo != null);
		repo.deleteAll();
	}
	
	@Test
	public void findUsersByClassifcationTest() {
		User a = new User("Ben", "BP", "benp@iastate.edu", "password", "master", 11);
		User b = new User("Ben", "BP", "ben@iastate.edu", "password", "master", 12);
		User c = new User("Elissa", "ES", "ellisa@iastate.edu", "password1", "master", 12);
		User d = new User("BenSmith", "BS", "bsmith@iastate.edu", "password2", "Class J", 1);
		repo.save(a);
		repo.save(b);
		repo.save(c);
		repo.save(d);
    	Collection<User> actual = repo.findUsersByClassifcation("master");
    	assert(actual.size() >= 3);
    	assert(actual.contains(a));
    	assert(actual.contains(b));
    	assert(actual.contains(c));
    	assert(!actual.contains(d));
    	Collection<User> secondRank = repo.findUsersByClassifcation("Class J");
    	assert(secondRank.size() >= 1);
    	assert(!secondRank.contains(a));
    	assert(!secondRank.contains(b));
    	assert(!secondRank.contains(c));
    	assert(secondRank.contains(d));
		repo.delete(a);
		repo.delete(b);
		repo.delete(c);
		repo.delete(d);
	}

	@Test
	public void findUserByUsernameTest() {
		User a = new User("BenP", "BP", "benp@iastate.edu", "password", "master", 11);
		repo.save(a);
		User b = repo.findUserByUsername(a.getUserName());
    	assert(a.equals(b));
    	repo.delete(a);
	}
	
	@Test
	public void updateUserAfterGameTest() {
		User a = new User("BenP", "BP", "benp@iastate.edu", "password", "master", 11);
		repo.save(a);
		a = repo.findUserByUsername(a.getUserName());
		repo.updateUserAfterGame(a.getPrimaryID(), 1000, 12, "Class E");
		a = repo.findUserByUsername(a.getUserName());
    	assertEquals("Class E", a.getClassification());
    	assertEquals(12, a.getNumGames());
    	assertEquals(1000, a.getRankScore());
    	repo.delete(a);
	}
}
