DROP DATABASE IF EXISTS league;

CREATE DATABASE league;

USE league;

CREATE TABLE champions (
  id int NOT NULL AUTO_INCREMENT,
  championId int NOT NULL,
  quantity integer NOT NULL,
  name varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/
