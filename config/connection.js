var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user:"root",
  port: 3307,
  dialect: "mysql",
  password:"root",
  database:"burgers_db"
});

module.exports = connection;
