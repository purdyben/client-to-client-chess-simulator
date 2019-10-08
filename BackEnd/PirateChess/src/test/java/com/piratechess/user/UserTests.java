package com.piratechess.user;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserTests {

    @Autowired
    private UserController controller;
    @Autowired
    private UserService service;


    @Test
    public void contexLoads() throws Exception {
        assertThat(controller).isNotNull();
    }
    
    @Test
    public void createsUser() throws Exception {
    	User u = new User((long) 123, "Colby", "CM", "colbym@iastate.edu", "admin", "master", 12);
    	controller.saveUser(u);
    	List<User> list = controller.getAllUsers();
    	assertThat(list.size() > 0);
    	assertThat(list.contains(u));
    }
    
    @Test
    public void getsDataFromDB() {
    	List<User> list = controller.getAllUsers();
    	assertThat(list.size() > 0);
    }
    
    @Test
    public void getRankTest() {
    	assertEquals("Senior Master", service.getRankByScore(2400));
    	assertEquals("National Master", service.getRankByScore(2200));
    	assertEquals("Expert", service.getRankByScore(2000));
    	assertEquals("Class A", service.getRankByScore(1800));
    	assertEquals("Class B", service.getRankByScore(1600));
    	assertEquals("Class C", service.getRankByScore(1400));
    	assertEquals("Class D", service.getRankByScore(1200));
    	assertEquals("Class E", service.getRankByScore(1000));
    	assertEquals("Class F", service.getRankByScore(800));
    	assertEquals("Class G", service.getRankByScore(600));
    	assertEquals("Class H", service.getRankByScore(400));
    	assertEquals("Class I", service.getRankByScore(200));
    	assertEquals("Class J", service.getRankByScore(0));

    }
    
    @Test
    public void updateUserRankTest_awins() {
    	User a = new User((long) 123, "Colby", "CM", "colbym@iastate.edu", "admin", "master", 12);
    	
    	User b = new User((long) 123, "Ben", "BP", "ben@iastate.edu", "password", "Class J", 12);
    	service.updateRank(a, b, a);
    }
    
    @Test
    public void updateUserRankTest_bwins() {
    	User a = new User((long) 123, "Colby", "CM", "colbym@iastate.edu", "admin", "master", 12);
    	User b = new User((long) 123, "Ben", "BP", "ben@iastate.edu", "password", "Class J", 12);
    	service.updateRank(a, b, a);
    }
    
   
}