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