-- YOU NEED TO ADD FOREIGN KEYS TO COMPLETE DATA STRUCTURE --


DROP DATABASE IF EXISTS business_DB;

CREATE DATABASE business_DB;

USE business_DB;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("Human Resources");

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO role (title, salary)
VALUES ("Manager", 60000);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO employee (first_name, last_name)
VALUES ("Dave", "Doe");

SELECT * FROM department, role, employee;