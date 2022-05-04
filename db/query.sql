source schema.sql
source seeds.sql

SELECT
e.id AS ID,
e.first_name AS First,
e.last_name AS last,
e.role_id AS Role,
r.salary AS salary,
m.last_name AS Manager,
d.department_name AS department


FROM employee e 
LEFT JOIN employee m
ON e.manager_id = m.id

LEFT JOIN role r 
ON e.role_id = r.title

LEFT JOIN department d 
ON r.department_id = d.id




