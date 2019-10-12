package com.piratechess.user;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

/**
 * User Model
 * 
 * @author Colby McKinley
 *
 */
@Entity
@Table(name = "userTable")
public class User {
	@Id
	@Column(name = "id", updatable = false, nullable = false)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "user_name", unique = true)
	@NotFound(action = NotFoundAction.IGNORE)
	private String userName;

	@Column(name = "display_name")
	@NotFound(action = NotFoundAction.IGNORE)
	private String displayName;

	@Column(name = "email")
	@NotFound(action = NotFoundAction.IGNORE)
	private String email;

	@Column(name = "user_password")
	@NotFound(action = NotFoundAction.IGNORE)
	private String userPassword;

	@Column(name = "classification")
	@NotFound(action = NotFoundAction.IGNORE)
	private String classification;

	@Column(name = "rankScore")
	@NotFound(action = NotFoundAction.IGNORE)
	private int rankScore;

	@Column(name = "numGames")
	@NotFound(action = NotFoundAction.IGNORE)
	private int numGames;

	public User(Long id, String userName, String displayName, String email, String userPassword, String classification,
			int rankScore) {
		super();
		this.userName = userName;
		this.displayName = displayName;
		this.email = email;
		this.userPassword = userPassword;
		this.classification = classification;
		// this.id = id;
		this.rankScore = rankScore;
	}

	public User(String userName, String displayName, String email, String userPassword, String classification,
			int rankScore) {
		super();
		this.userName = userName;
		this.displayName = displayName;
		this.email = email;
		this.userPassword = userPassword;
		this.classification = classification;
		this.rankScore = rankScore;
	}

	public User() {

	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null || obj.getClass() != this.getClass())
			return false;
		User o = (User) obj;
		return (o.getPrimaryID().equals(this.getPrimaryID()) && o.userName.equals(this.getUserName()));
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append(displayName).append(" ").append(classification);
		return sb.toString();
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getDisplayName() {
		return displayName;
	}

	public void setDisplayName(String displayName) {
		this.displayName = displayName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String password) {
		this.userPassword = password;
	}

	public String getClassification() {
		return classification;
	}

	public void setClassification(String classification) {
		this.classification = classification;
	}

	public int getRankScore() {
		return rankScore;
	}

	public void setRankScore(int newScore) {
		rankScore = newScore;
	}

	public int getNumGames() {
		return numGames;
	}

	public void setNumGames(int numGames) {
		this.numGames = numGames;
	}

	public void incrementNumGames() {
		++numGames;
	}

	public Long getPrimaryID() {
		return this.id;
	}

}
