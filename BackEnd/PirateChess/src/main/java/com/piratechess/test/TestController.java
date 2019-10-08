package com.piratechess.test;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(path="/test")
public class TestController {
	
	@RequestMapping("/hello")
    String home() {
        return "Hello World - v3!";
    }

}	