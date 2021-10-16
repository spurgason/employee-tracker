const db = require('./data/connection')
const cTable = require('console.table');
const inquirer = require('inquirer');


const promptUser = () => {
    
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'selectAction',
                message: "What would you like to do?",
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role'
                ]
            }
        ]).then(({selectAction}) => {
            if (selectAction === 'View all departments') {
                viewDepartments();
            } 
            if (selectAction === 'View all roles') {
                viewRoles();
            } 
            if (selectAction === 'View all employees') {
                viewEmployees();
            } 
            if (selectAction === 'Add a department') {
                
            } 
            if (selectAction === 'Add a role') {
                
            } 
            if (selectAction === 'Add an employee') {
                
            } 
            if (selectAction === 'Update an employee role') {
                
            } 
        });

}

const viewDepartments = () => {
    const sql = `SELECT id AS id, name AS department
                FROM department`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        console.table(result);
    });
};

const viewRoles = () => {
    const sql = `SELECT * FROM role`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        console.table(result);
    });
}

const viewEmployees = () => {
    const sql = `SELECT 

                employee.id,
                employee.first_name,
                employee.last_name,
                role.title AS role
                
                FROM employee
                LEFT JOIN role 
                ON employee.role_id = role.id`;

                

    db.query(sql, (err, result) => {
        if (err) throw err;
        console.table(result);
    });
} 

promptUser();