package com.example.app.util;

import javax.persistence.EntityManagerFactory;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class HibernateUtil {

	@Autowired
	private  EntityManagerFactory entityManager;

	@Bean
	public SessionFactory getSessionFactory() {
		if (entityManager.unwrap(SessionFactory.class) == null) {
			throw new NullPointerException("factory is not a hibernate factory");
		}
		return entityManager.unwrap(SessionFactory.class);
	}
}