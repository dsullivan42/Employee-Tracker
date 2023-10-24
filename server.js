const inquirer = require('inquirer');
const mysql = require('mysql2');
const fs = require('fs');

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'Hiholetsgo97!',
        database:'employee_db'
    },
    console.log('Connected to the employee_db database.')
);

const startScreenPrompt = () => {
    return inquirer.prompt([
        {
            type:'list',
            name:'action',
            message:'What would you like to do?',
            choices:[
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Exit'
            ]
        }
    ])
    .then((answers) => {
        
        switch(answers.action) {
            case 'View all departments':
                viewDepartments();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployeeRole();
                break;
            case 'Exit':
                db.end();
                break;
        }
    })
}

const viewDepartments = () => {
    db.query('SELECT * FROM department', (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
        startScreenPrompt();
    })
}

const viewRoles = () => {
    db.query('SELECT * FROM role', (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
        startScreenPrompt();
    })
}

const viewEmployees = () => {
    db.query('SELECT * FROM employee', (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
        startScreenPrompt();
    })
}

const addDepartment = () => {
    return inquirer.prompt({
        type:'input',
        message:"What's the name of the department you'd like to add?",
        name:'departmentName'
    }).then ((answers) => {
        db.query(`INSERT INTO department (name) VALUES ('${answers.departmentName}')`, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log('Department added!');
            startScreenPrompt();
        })
    })
}

const addRole = () => {
    return inquirer.prompt([
    {
        type:'input',
        message:"What's the name of the role you'd like to add?",
        name:'roleName'
    },
    {
        type:'input',
        message:"What's the salary of the role you'd like to add?",
        name:'roleSalary'
    },
    {
        type:'input',
        message:"What department does this role belong to?",
        name:'roleDepartment'
    }
    ]).then ((answers) => {
        db.query("INSERT INTO role (title, salary, department) VALUES (?, ?, ?)", [answers.roleName, answers.roleSalary, answers.roleDepartment], (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log('Role added!');
            startScreenPrompt();
        })
    })
}

const addEmployee = () => {
    return inquirer.prompt([
    {
        type:'input',
        message:"What's the first name of the employee you'd like to add?",
        name:'employeeFirstName'
    },
    {
        type:'input',
        message:"What's the last name of the employee you'd like to add?",
        name:'employeeLastName'
    },
    {
        type:'input',
        message:"What's the role of the employee you'd like to add?",
        name:'employeeRole'
    },
    {
        type:'input',
        message:"Who is the manager of the employee you'd like to add?",
        name:'employeeManager'
    }
    ]).then ((answers) => {
        db.query("INSERT INTO employee (firstName, lastName, employeeRole, employeeManager) VALUES (?,?,?,?)", [answers.employeeFirstName, answers.employeeLastName, employeeRole, employeeManger] , (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log('Employee added!');
            startScreenPrompt();
        })
    })
}

const updateEmployeeRole = () => {
    return inquirer.prompt([
        {
            type:'input',
            message:'what is the name of the employee you would like to update?',
            name:'employeeName'
        },
        {
            type:'input',
            message:'what is the new role of the employee?',
            name:'employeeRole'
        }
    ]).then ((answers) => {
        db.query("UPDATE employee SET role = ? WHERE firstName = ?", [answers.employeeRole, answers.employeeName], (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log('Employee role updated!');
            startScreenPrompt();
        })
    })
}