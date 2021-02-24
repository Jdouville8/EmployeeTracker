const inquirer = require('inquirer')
const mysql = require('mysql')
const cTable = require('console.table');
const connection = require("./db_connection")
const Department = require("./classes/department")

// Create inquirer prompt 
// Ask user to pick an operation ["Department", "Role" or "Employee"]
initPrompt();

function initPrompt() {
    inquirer
      .prompt({
        name: "operation",
        type: "list",
        message: "Please pick an operation:",
        choices: ["Department", "Role", "Employee", "exit"]
      })
      .then(function(answer) {
        // based on their answer, either call the bid or the post functions
        const { operation } = answer
        if (operation === "Department") {
          departmentPrompt();
        }
        else if(operation === "Role") {
          rolePrompt();
        } 
        else if(operation === "Employee") {
          employeePrompt();
        } 
        else{
          connection.end();
        }
      });
  }
    // DEPARTMENT ["View a department", "Add a department"]
        // in .then, make a new Department object passing in prompt responses (once deconstructed) in as arguments to be used as key value pairs and passed from there into class object methods
function departmentPrompt() {
    inquirer
    .prompt({
        name: "operation",
        type: "list",
        message: "What would you like to do?",
        choices: ["View a department", "Add a department", "exit"]
         })
        .then(function(answer) {
                // based on their answer, either call the bid or the post functions
            const { operation } = answer
            if (operation === "View a department") {
                Department.departmentAdd();
            }
            else if(operation === "Add a department") {
                 departmentAdd();
            } 
            else{
                connection.end();
            }
        });
    }

    // ROLE ["View a role", "Add a role"]
    // EMPLOYEE ["View an employee", "Add a employee", "Update an employee role"]