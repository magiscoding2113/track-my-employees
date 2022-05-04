const mysql = require("mysql2");
const inquirer = require("inquirer");
const index = require("./index");
const util = require("util");
const Connection = require("mysql2/typings/mysql/lib/Connection");
const { start } = require("repl");
require("console.table");

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password123!",
    database: "employee_db"
});

db.query = util.promisify(db.query);

Connection.connect(function(err){
    if(err)throw err;
    console.log("Connected");

    start();
});

function start() {
    inquirer
    .prompt([
        {
            type:"list",
            name:"start",
            message:"What would you like to do?",
            choices:["View", "Add","Update", "Quit" ]

    }
    ])
}



