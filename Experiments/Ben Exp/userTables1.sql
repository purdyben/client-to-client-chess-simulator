DROP DATABASE IF EXISTS testUserTable;
CREATE DATABASE IF NOT EXISTS testUserTable;
USE testUserTable;

CREATE table Users(
username varchar(30) NOT NULL UNIQUE,
nameID int primary KEY auto_increment
);
CREATE table UserPassword(
userPassword varchar(30) NOT NULL UNIQUE,
passID INT,
FOREIGN KEY (passID)
	REFERENCES Users(nameID)
        ON DELETE CASCADE
);
CREATE table UserID(
Name_id INT,
Passsword_id INT,
FOREIGN KEY (Name_id)
        REFERENCES Users(nameID)
        ON DELETE CASCADE,
FOREIGN KEY (Passsword_id)
	REFERENCES UserPassword(passID)
    ON DELETE CASCADE
);
DROP TRIGGER /*!50032 IF EXISTS */ `after_password`;

DELIMITER //
CREATE TRIGGER after_password AFTER INSERT ON `UserPassword` 
    FOR EACH ROW BEGIN
         INSERT INTO UserID (Name_id, Passsword_id) VALUES (
		 LAST_INSERT_ID(), LAST_INSERT_ID()
          );
    END;
	

insert into Users(userName) value(
'guest');
insert into UserPassword(userPassword, passID) value(
'password', LAST_INSERT_ID());
select * from Users JOIN UserPassword;
SELECT * from UserID;
