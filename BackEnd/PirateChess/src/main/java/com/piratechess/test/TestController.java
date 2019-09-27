package com.piratechess.test;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="/test")
public class TestController {
	
	@RequestMapping("/hello")
    String home() {
        return "Hello World - v3!";
    }

}	