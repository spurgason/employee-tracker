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
        ]).then(({ selectAction }) => {
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
                addDepartment();
            }
            if (selectAction === 'Add a role') {
                addRole();
            }
            if (selectAction === 'Add an employee') {
                addEmployee();
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
                role.title AS role,
                department.name AS department,
                role.salary,
                CONCAT(manager.first_name, " ", manager.last_name) AS manager

                FROM employee 
                LEFT JOIN role ON employee.role_id = role.id
                LEFT JOIN department ON role.department_id = department.id
                LEFT JOIN employee manager ON employee.manager_id = manager.id`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        console.table(result);
    });
}

const addDepartment = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'department',
                message: 'Enter new department name:'
            }
        ]).then(input => {
            const params = input.department;
            const sql = `INSERT INTO department (name)
                    VALUES (?)`;

            db.query(sql, params, (err, result) => {
                if (err) throw err;
                console.log('Department Added');
            });
        });
}

const addRole = () => {

    let deptQuery = `SELECT * FROM department`;

    db.query(deptQuery, (err, result) => {
        if (err) throw err;
        const departments = result.map(({ name, id }) => ({ name: name, value: id }));

        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'role',
                    message: 'Enter new role name:'
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'Enter new role salary:'
                },
                {
                    type: 'list',
                    name: 'department',
                    message: 'What department does this role belong to?',
                    choices: departments
                }

            ]).then(input => {
                const params = [input.role, input.salary, input.department]
                const sql = `INSERT INTO role (title, salary, department_id)
                        VALUES (?,?,?)`

                db.query(sql, params, (err, result) => {
                    if (err) throw err;
                    console.log('Role Added');
                });
            });
    });
}

const addEmployee = () => {

    let roleQuery = `SELECT * FROM role`;
    let managerQuery = `SELECT 
                        CONCAT(manager.first_name, " ", manager.last_name) AS manager

                        FROM employee 
                        LEFT JOIN employee manager ON employee.manager_id = manager.id`;

    db.query(roleQuery, (err, result) => {
        if (err) throw err;
        const roles = result.map(({title, id}) => ({name: title, value: id}));
    db.query(managerQuery, (error, data) => {
        if (error) throw err;
        const managers = data.map(({manager, id}) => ({name:manager, value:id}));
    
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: "Enter employees' first name:"
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: "Enter employees' last name:"
                },
                {
                    type: 'list',
                    name: 'role',
                    message: "What is this employees' role?",
                    choices: roles
                },
                {
                    type: 'list',
                    name: 'manager',
                    message: "Who is this employees' manager?",
                    choices: managers
                }
            ]).then(input => {
                const params = [input.firstName, input.lastName, input.role, input.manager]
                console.log(params);
            });

        });
    });
}



promptUser();