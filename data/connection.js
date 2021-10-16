const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '%2k4fWGfkWYs',
        database: 'employee_db'
    });

module.exports = db;