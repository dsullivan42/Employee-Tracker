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
        name:'roleDepartmentID'
    }
    ]).then ((answers) => {
        db.query(`INSERT INTO role (title) VALUES ('${answers.roleName}')`, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log('Role added!');
            startScreenPrompt();
        })
    })
}

const addEmployee = () => {
    return inquirer.prompt({
        type:'input',
        message:"What's the name of the employee you'd like to add?",
        name:'employeeName'
    }).then ((answers) => {
        db.query(`INSERT INTO employee (employee_name) VALUES ('${answers.employeeName}')`, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log('Employee added!');
            startScreenPrompt();
        })
    })
}