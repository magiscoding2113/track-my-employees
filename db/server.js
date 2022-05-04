const inquirer = require('inquirer');
const db = require('./index');
const {connection} = require('./index');
const { start } = require('repl');
//require("console.table");

db.connect(async function(){
    start();
})
{
    inquirer
    .prompt([
        {
            type:"list",
            name:"start",
            message:"What would you like to do?",
            choices:["View All Employees","View All Roles", "View All Departments", "Add Employee", "Add Role", "Add Department", "Update", "Quit" ]

    }
    ]).then((answer) => {
        switch(answer.choice) {
            case "View All Employees":
                return viewEmployees();
            case    "View All Roles":
               return viewRoles();
            case "View All Departments":
                return viewDepartments();
            case "Add New Employee":
              return newEmployee;     
            case "Add Role":
                return addRole();
            case "Add Department":
                return addDepartment();
            case "Update":
              return Update();
            case "Quit":
                return Quit();                   
        }

})
}

function viewEmployees() {
    const request = "SELECT * FROM employee";
    db.query(request, function(err, res){
       if(err) throw err;
        console.log("Viewing all Employees");
        console.table(res);
        inquirer.prompt([
           {
            type:'list',
              name:'choice',
                message: 'select an option',
                choices: ['Main menu, Quit'],

        }
    ])
    .then((answer) => {
       switch (answer.choice) {
          case 'Main Menu':
              start();
                break;
                case'Quit':
                Quit();
       }
    })
   })
};
function viewRoles() {
    let request = "SElECT * FROM ROLE   ";
    db.query(request, function(err, res){
      if(err)throw err;
        console.log("Viewing all Roles");
        console.table(res);
        inquirer.prompt([
            {
               type:'list',
                name:'choice',
               message:'select an option',
                choices: ['Main menu, Quit']
                
        }
    ])
    .then((answer) => {
       switch (answer.choice) {
            case 'Main menu':
                start();
               break;
            case 'Quit':
           Quit();
        }
    })
    })
}
function viewDepartments() {
    const request = "SELECT * FROM department";
    db.query(request, function(err, res){
       if(err)throw err;
        console.log("Viewing all Departments");
       console.table(res);
       inquirer.prompt([
           {
               type:'list',
                name:'choice',
                message:'select an option',
                choices: ['Main menu, Quit']

        }
    ])
    .then((answer) => {
       switch(answer.choice){
          case 'Main menu':
               start();
                break;
            case 'Quit':
                Quit();    
        }
})
    })
}
function newEmployee() {
    console.log('oy')
    inquirer.prompt ([
       { 
           type:'input',
            message:'Enter employee first name',
            name:' firstName'

    },
    {
       type:'input',
        message:'enter employess last name',
        name:'lastName'
    },
    {
        type:'input',
        message:'enter employee ID number',
    name:'employeeID'
    },
    {
        type:'input',
        message:'enter their managers ID',
        name: 'ManagerID'
    }
])
.then(function (response) {
    connection.query('INSERT INTO employees(first_name, last_name, roles_id, manager_id) VALUES(?,?,?,?'),
    [response.firstName, response.lastName, response.employeeID, response.ManagerID],function(err, response) {
        if(err)throw err;
        console.table(res);
        inquirer.prompt([
            {
                type:'list',
                name:'choice',
                message:'select an option',
                choices:['Main menu', 'Quit']

       }
    ]).then((answer) => {
        switch(answer.choice) {
            case 'Main menu':
                start();
                break;
            case 'Quit':
                Quit();
        }
    })
    }
});
}