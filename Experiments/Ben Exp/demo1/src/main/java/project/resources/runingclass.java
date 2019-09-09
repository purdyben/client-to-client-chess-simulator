package project.resources;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.techprimers.db.repository")
@SpringBootApplication
public class runingclass {

	public static void main(String[] args) {
		SpringApplication.run(runingclass.class, args);
	}
}