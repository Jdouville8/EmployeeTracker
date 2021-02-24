// require and export whatever classes needed. This does not need to extend from anything
const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");
const connection = require("./db_connection")