INSERT INTO department (department_name)
VALUES ("Engineering"),
       ("Finance"),
       ("Human Resources"),
       ("Marketing");

INSERT INTO employeeTitle (title, salary, department_id)
VALUES ("Lead Engineer", 200000, 2),
       ("Junior Engineer", 90000, 2),
       ("Finance Manager", 150000, 1),
       ("Accountant", 70000, 1),   
       ("HR Manager", 85000, 3),
       ("HR Specialist", 55000, 3),
       ("Lead Marketing", 83000, 4),
       ("Marketing Analyst", 65000, 4);    

INSERT INTO employee(first_name, last_name, title_id, manager_id)
VALUES   ("Sanaa", "Kumar", 1, null),
         ("Yesenia", "Lopez", 2, 1),
         ("Jessica", "Liberty", 3, null),
         ("Marie", "Flynn", 4, 3),
         ("Jeanette", "Sanchez", 5, null),
         ("Perla", "Clark", 6, 5),
         ("Alexis", "Luna", 7, null),
         ("Savanna", "Rodriguez", 8, 2);
