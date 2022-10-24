DROP DATABASE IF EXISTS employeemanagement_db;
CREATE DATABASE employeemanagement_db;
USE employeemanagement_db;

CREATE TABLE department ( 
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY(id)
    );

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY (department_id),
    REFERENCES department(id)
)
