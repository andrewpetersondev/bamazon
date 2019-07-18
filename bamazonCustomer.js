// import packages
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

// create connection with mysql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "bamazon",
    password: "somepassword123456",
    database: "bamazon"
});

// connect to mysql server and database
connection.connect(function (err) {
    if (err) throw err;
    // run a function when the connection is made that shows all of the inventory
    showInventory();
});

function showInventory() {

}

// function start() {
//     inquirer.prompt({})
// }