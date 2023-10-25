USE employee_tracker;

INSERT INTO department (name)
VALUES ('Sales'), ('Marketing'), ('Finance'), ('Human Resources'), ('IT'), ('Legal');

INSERT INTO role (title, salary, department)
VALUES ('Sales Lead', 100000, 1),
       ('Salesperson', 80000, 1),
       ('Lead Engineer', 150000, 5),
       ('Software Engineer', 120000, 5),
       ('Account Manager', 160000, 1),
       ('Accountant', 125000, 3),
       ('Legal Team Lead', 250000, 6),
       ('Lawyer', 190000, 6),
       ('Lead Engineer', 150000, 5),
       ('Software Engineer', 120000, 5),
       ('Account Manager', 160000, 1),
       ('Accountant', 125000, 3),
       ('Legal Team Lead', 250000, 6),
       ('Lawyer', 190000, 6);

INSERT INTO employee (firstName, lastName, employeeRole, employeeManager)
VALUES ("Peter","Parker",1, 1),
       ("Tony","Stark",2, 1),
       ("Bruce","Banner",3, 1),
       ("Steve","Rogers",4, 1),
       ("Natasha","Romanoff",5, 1),
       ("Clint","Barton",6, 1),
       ("Thor","Odinson",7, 1),
       ("Loki","Laufeyson",8, 1),
       ("Wanda","Maximoff",9, 1),
       ("Vision","Vision",10, 1),
       ("Sam","Wilson",11, 1),
       ("Bucky","Barnes",12, 1),
       ("Scott","Lang",13, 1),
       ("Stephen","Strange",14, 1),
       ("T'Challa","T'Challa",13, 1),
       ("Carol","Danvers",6, 1),
       ("Peter","Quill",7, 1),
       ("Gamora","Gamora",8, 1),
       ("Drax","Drax",9, 1),
       ("Rocket","Raccoon",10, 1),
       ("Groot","Groot",11, 1),
       ("Mantis","Mantis",2, 1),
       ("Nebula","Nebula",3, 2)
       ("Okoye","Okoye",4, 2),
       ("Valkyrie","Valkyrie",5, 2),
       ("Korg","Korg",6, 3),
       ("Miek","Miek",7, 3);
-- Big Marvel fan, so I had to do it