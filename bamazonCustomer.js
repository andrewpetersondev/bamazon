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
    console.log("Connected as ID: " + connection.threadId + "\n");
    // run a function that shows all of the inventory
    showInventory();
});

function showInventory() {
    var query = "SELECT * FROM bamazon.products";
    connection.query(query, function (error, results) {

        console.table(results);

    });
    connection.end();
}

// function start() {
//     inquirer.prompt({})
// }