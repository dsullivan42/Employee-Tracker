DROP DATABASE IF EXISTS employee_tracker;

CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (department) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    employeeRole INT NOT NULL,
    employeeManager INT,
    PRIMARY KEY (id),
    FOREIGN KEY (employeeRole) REFERENCES role(id),
    FOREIGN KEY (employeeManager) REFERENCES employee(id)
)