const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    port: 3001,
    user:"root",
    password:"password123!",
    database: "employee_db"
});