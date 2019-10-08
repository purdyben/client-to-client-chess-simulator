package com.piratechess.user;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

/**
 * User Model
 * @author Colby McKinley
 *
 */
@Entity
@Table(name = "userTable")
public class User {
	@Id
	@Column(name = "id")
	@NotFound(action = NotFoundAction.IGNORE)
	private long id;
	@Column(name = "user_name")
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

	public User(Long id, String userName, String displayName, String email, String userPassword, String classification) {
		super();
		this.userName = userName;
		this.displayName = displayName;
		this.email = email;
		this.userPassword = userPassword;
		this.classification = classification;
		this.id = id;
	}

	public User() {

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

	public Long getPrimaryID() {
		return this.id;
	}

}
