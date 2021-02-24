const inquirer = require('inquirer')
const mysql = require('mysql')
const cTable = require('console.table');


// Create inquirer prompt 
// Ask user to pick an operation ["Department", "Role" or "Employee")
    // DEPARTMENT ["View a department", "Add a department"]