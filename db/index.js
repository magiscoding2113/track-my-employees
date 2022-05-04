const { connect } = require('http2');
const mysql = require('mysql2');
const { start } = require('repl');


const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password123!",
    database: "employee_db"
});

connection.connect(function(err) {
    if(err)throw err;
    console.log("SQL connected");
    start();
})

module.exports = connection;