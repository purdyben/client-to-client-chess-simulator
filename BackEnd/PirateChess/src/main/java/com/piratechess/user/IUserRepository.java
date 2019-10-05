package com.piratechess.user;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends JpaRepository<User, Long> {

	@Query("SELECT u FROM User u WHERE u.classification = ?1")
	Collection<User> findUsersByClassifcation(String name);
	
	@Query(value="SELECT TOP :maxCount u FROM userTable u WHERE u.classification = :name",
			nativeQuery = true)
	Collection<User> findTopUsersForClassifcation(@Param("maxCount") int maxUsers, @Param("name") String name);
	
	@Modifying
	@Query(value = "update userTable u set u.rankScore = :score set u.numGames = :numGames set u.classification = :classification where u.id = :id", 
	  nativeQuery = true)
	void updateUserAfterGame(@Param("id")Long Id, @Param("score")Integer score, @Param("numGames")Integer numGames, @Param("classification")String classification);


}
