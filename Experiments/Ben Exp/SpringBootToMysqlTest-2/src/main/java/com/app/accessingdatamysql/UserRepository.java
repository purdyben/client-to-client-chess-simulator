package com.app.accessingdatamysql;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository 
public interface UserRepository extends JpaRepository<User,Integer>{ //CrudRepository<User, Integer> {
	
	@Query(value="SELECT * from userTable",nativeQuery=true)
	public List<User> getAll();
}
