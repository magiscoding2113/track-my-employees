source schema.sql
source seeds.sql


SELECT role_id.id, title.title, department.name as department
FROM title
JOIN department
ON title.department_id = department.id;

SELECT employee.id, employee.first_name, employee.last_name, employee.title_id as employee
FROM employee
JOIN title ON title_id = title.id
JOIN department ON department_id = department.id;

