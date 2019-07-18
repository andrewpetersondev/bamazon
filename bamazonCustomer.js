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
    // showInventory();
    start();
});

function start() {

    var query = "SELECT * FROM bamazon.products";

    connection.query(query, function (error, results) {

        if (error) throw error;

        console.table(results);

        inquirer.prompt([
            {
                name: "item",
                type: "number",
                message: "What is the item_id of the item you would like to buy?"
            },
            {
                name: "units",
                type: "number",
                message: "How many units of the item would you like to purchase?"
            }
        ]).then(function (answer) {
            // console.log(answer);
            var item = answer.item;
            var units = answer.units;
            // console.log(item, units);
            checkOrder(units);
            // 
        })
        connection.end();

    });
}

function checkOrder(results, answer) {
    // parseInt and make sure it is a number
    // if else make comparison to check quantity
    // makepurchase(product, quantity) in else statement 
}

function makePurchase() {
    // update database
    // var query = /////

}