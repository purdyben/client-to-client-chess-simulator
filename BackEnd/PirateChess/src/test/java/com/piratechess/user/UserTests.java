package com.piratechess.user;
import static org.assertj.core.api.Assertions.assertThat;

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

    @Test
    public void contexLoads() throws Exception {
        assertThat(controller).isNotNull();
    }
    
    @Test
    public void createsUser() throws Exception {
    	User u = new User((long) 123, "Colby", "CM", "colbym@iastate.edu", "admin", "master");
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
    
   
}