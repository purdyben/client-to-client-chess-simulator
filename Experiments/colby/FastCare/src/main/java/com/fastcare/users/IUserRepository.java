package com.fastcare.users;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends CrudRepository<User, Long>  {

	/**
	 * Fetch User table from db
	 * @return iterable list of users
	 */
	Iterable<User> getUsers();
}
