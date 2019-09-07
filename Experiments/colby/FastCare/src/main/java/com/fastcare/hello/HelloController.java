package com.fastcare.hello;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
	@RequestMapping("/")
	public String Welcom() {
		return "Welcome to FastCare!";
	}
	@RequestMapping("/hello")
	public String HelloWorld() {
		return "Hello, World!";
	}
}
