package com.piratechess.user;

import java.util.Collection;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface IUserRepository extends JpaRepository<User, Long> {

	@Query("SELECT u FROM User u WHERE u.classification = ?1")
	Collection<User> findUsersByClassifcation(String name);

	@Query("SELECT u FROM User u WHERE u.userName = ?1")
	User findUserByUsername(String userName);

	@Query(value = "SELECT u FROM User u WHERE u.classification = ?1 ORDER BY u.rankScore DESC")
	Page<User> findUsersByClassifcationPagination(String classification, Pageable pageable);

//	    @Query(value = "SELECT * FROM Users ORDER BY id", countQuery = "SELECT count(*) FROM Users", nativeQuery = true)
//	    Page<User> findAllUsersWithPaginationNative(Pageable pageable);
//	
//	@Query(value="SELECT u FROM User u WHERE u.classification = :name",
//			nativeQuery = true)
//	Collection<User> findUsersByClassifcationOrdered( @Param("name") String name);

	@Modifying
	@Transactional
	@Query(value = "update User u set u.rankScore = :score, u.numGames = :numGames, u.classification = :classification where u.id = :id")
	void updateUserAfterGame(@Param("id") Long Id, @Param("score") Integer score, @Param("numGames") Integer numGames,
			@Param("classification") String classification);

	@Modifying
	@Transactional
	@Query(value = "update User u set u.rankScore = :score  where u.id = :id")
	void updateFields(@Param("id") Long Id, @Param("score") Integer score);
}
