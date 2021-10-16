const db = require('./data/connection')
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
                
            } 
            if (selectAction === 'View all roles') {
                
            } 
            if (selectAction === 'View all employees') {
                
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