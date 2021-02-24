// require and export whatever classes needed. This does not need to extend from anything

const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");
const connection = require("./db_connection")

departmentAdd = function () {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "Please provide a unique id",
      },
      {
        name: "name",
        type: "input",
        message: "Please provide a department name",
      },
    ])
    .then(function (answer) {
      // create a new
      const { id, name } = answer;
      const newDep = new Department(id, name);
      newDep.log();
    });
};

class Department {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  log() {
      console.log(this.id);
      console.log(this.name);
    }

    //   Create a method that adds new entry to database
    addToDB() {
      
    }
}

module.exports = Department;
