// configuration
// ==========================================================================================================================
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
connection.connect(function (error) {
    if (error) throw error;
    console.log("Connected as ID: " + connection.threadId + "\n");
    showMenu();
});

// global variables
// ==========================================================================================================================

// functions
// ==========================================================================================================================

function showMenu() {
    inquirer.prompt([
        {
            name: "menu",
            type: "rawlist",
            message: "Select one of the menu options.",
            choices: [
                "View Products for Sale",
                "View Low Inventory",
                "Add to Inventory",
                "Add New Product"
            ]
        }
    ]).then(function (answer) {
        // console.log(answer);
        switch (answer.action) {
            case "View Products for Sale":
                viewInventory();
                break;
            case "View Low Inventory":
                lowInventory();
                break;
            case "Add to Inventory":
                addToInventory();
                break;
            case "Add New Product":
                newProduct();
                break;
        }
        connection.end();
    })
}

// function viewInventory() { }

// function lowInventory() { }

// function addToInventory() { }

// function newProduct() { }
