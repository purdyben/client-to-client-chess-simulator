package com.example.app;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.app.entites.User;

@Repository
public class UserRepository {
	
	@Autowired
	private SessionFactory sessionFactory;
	public void createUser(User user){
		Session session= null;
		try {
			session = sessionFactory.openSession();
			session.beginTransaction();
			Integer id =(Integer) session.save(user);
			System.out.println("user is created With Id::"+id);
			session.getTransaction().commit();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

}
