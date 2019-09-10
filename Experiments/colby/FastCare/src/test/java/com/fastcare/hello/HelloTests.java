package com.fastcare.hello;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class HelloTests {

    @Autowired
    private HelloController controller;

    @Test
    public void contexLoads() throws Exception {
        assertThat(controller).isNotNull();
    }
    
//    @Test
//    public void testHelloController_helloWorld() {
//        String result = controller.greeting("");
//        assertEquals(result, "Hello, World!");
//    }
    
   
}