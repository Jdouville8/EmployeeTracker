// Require in mysql
const mysql = require('mysql')

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",
  
    // *****ADD PASSWORD******
    password: "Hardflip180.$&@",
    database: "business_DB"
  });
  
  // connect to the mysql server and sql database (may have to be separated and written into class/index js files)
  connection.connect(function(err) {
    if (err) throw err;
    console.log(`connection established on port: ${connection.port}`)
  });

  module.exports = connection;