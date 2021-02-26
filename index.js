const inquirer = require('inquirer')
const mysql = require('mysql')
// const cTable = require('console.table');
const connection = require("./db_connection")

employeeAdd = function () {
  let newEmployee = [];
  let roles = [];
  connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    res.forEach((role) => roles.push(role.title));
  });
  inquirer
  .prompt(
    [ 
      {
        message: "Enter employee first name",
        name: "first_name",
        type: "input",
      },
      {
        message: "Enter employee last name",
        name: "last_name",
        type: "input",
      },
    ]
  ).then((res) => {
    const {first_name, last_name} = res
    newEmployee = [first_name, last_name]
    inquirer.prompt(
      [
        {
          message: 'Please provide role id',
          name: 'role_id',
          type: 'input',
        },
        {
          message: 'Please provide manager id (if applicable)',
          name: 'department_id',
          type: 'input',
        },
      ]
    ).then((answer) => {
      connection.query("SELECT id FROM roles WHERE title = ?", [answer.employeeRoles], (err) => {
        if (err) throw err;
        const newEmployeeInfo = {
          first_name: newEmployee[0],
          last_name: newEmployee[1],
          role_id: answer.role_id,
          department_id: answer.department_id
        }
        connection.query("INSERT INTO employee SET ?", newEmployeeInfo, (err, res) => {
          if (err) throw err;
          initPrompt();
        });
      });
    });
  });
};

roleAdd = function () {
  let department = [];
  connection.query("SELECT name FROM department", (err, res) => {
      if (err) throw err;
      res.forEach((item) => department.push(item.name));
  }
      )
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "Please provide a role title",
      },
      {
        name: "salary",
        type: "input",
        message: "Please provide a yearly salary",
      },
      {
        message: "Select department for your role",
        name: "department",
        type: "list",
        choices: department
      }
    ])
    .then((answer) => {
      console.log("New department being added");
      connection.query("INSERT INTO role SET ?", { title: answer.title, salary: answer.salary }, (err) => {
        if (err) throw err;
        console.log("New department created");
        initPrompt();
      });
    });
};

departmentAdd = function () {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Please provide a department name",
      },
    ])
    .then((answer) => {
      console.log("New department being added");
      connection.query("INSERT INTO department SET ?", { name : answer.name }, (err) => {
        if (err) throw err;
        console.log("New department created");
        initPrompt();
      });
    });
};

// View functions

departmentView = () => {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table(res)
    initPrompt();
}
  );
}

roleView = () => {
  connection.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
    console.table(res)
    initPrompt();
}
  );
}

employeeView = () => {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res)
    initPrompt();
}
  );
}

// Prompt initialize
function initPrompt() {
  inquirer
    .prompt({
      name: "operation",
      type: "list",
      message: "Please pick an operation:",
      choices: ["View a Department", "Add a Department", "View a Role", "Add a Role", "View an Employee", "Add an Employee", "Update an Employee"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post function
      const { operation } = answer

      switch (operation) {

        case "View a Department":
          departmentView();
          break;
        case "Add a Department":
          departmentAdd();
          break;
        case "View a Role":
          roleView();
          break;
        case "Add a Role":
          roleAdd();
          break;
        case "View an Employee":
          employeeView();
          break;
        case "Add an Employee":
          employeeAdd();
          break;
        default:
          connection.end();
        }
    })
}




initPrompt();

    // DEPARTMENT ["View a department", "Add a department"]
        // in .then, make a new Department object passing in prompt responses (once deconstructed) in as arguments to be used as key value pairs and passed from there into class object methods



    // ROLE ["View a role", "Add a role"]
    // EMPLOYEE ["View an employee", "Add a employee", "Update an employee role"]

    // module.exports = initPrompt;