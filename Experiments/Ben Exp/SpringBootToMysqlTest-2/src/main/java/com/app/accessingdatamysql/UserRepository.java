package com.app.accessingdatamysql;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
	
//	@Query(value="SELECT * from user",nativeQuery=true)
//	public List<User> findAll();
}
