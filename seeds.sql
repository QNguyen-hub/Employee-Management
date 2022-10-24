INSERT INTO departments ( names )
VALUES ('Science'), ('Physic'),('Computer Science');

INSERT INTO roles ( title, salary, department_id )
VALUES ('Teacher', 70000, 1),
        ( 'TA', 40000, 2);

INSERT INTO employees ( first_name, last_name, role_id, manager_id)
VALUES ("Quy", "Nguyen", 2, 1),
        ("Huy", "Pham", 1, 2);