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
    connection.query(query, function (error, inventory) {
        if (error) throw error;
        console.table(inventory);
        inquirer.prompt([
            {
                name: "item",
                type: "number",
                message: "What is the item_id of the item you would like to order?"
            },
            {
                name: "units",
                type: "number",
                message: "How many units of the item would you like to order?"
            }
        ]).then(function (userInput) {
            // var item = parseInt(userInput.item);
            // var units = parseInt(userInput.units);
            // console.log(userInput);
            // checkInventory(inventory, userInput);
            checkInventory(userInput);
        })
    });
}

function checkInventory(userInput) {
    // console.log("checkInventory() called");

    var query = "SELECT * FROM `products` WHERE `item_id` = ?";

    connection.query(query, [userInput.item], function (error, itemInventory) {

        if (error) throw error;

        // for (var i = 0; i < itemInventory.length; i++) {
        //     console.log(itemInventory[i].stock_quantity);
        // }

        // console.log(itemInventory[0].stock_quantity);

        if (itemInventory[0].stock_quantity > userInput.units) {
            console.log("we have enough in stock");
            purchase(userInput, itemInventory);


        } else {
            console.log("we don't have enough inventory to complete your order");
        }

    })
    // parseInt and make sure it is a number
    // if else make comparison to check quantity
    // makepurchase(product, quantity) in else statement 

}

function purchase(userInput, itemInventory) {

    var query = "UPDATE products SET ? WHERE ?";
    connection.query(query,
        [
            {
                stock_quantity: itemInventory[0].stock_quantity - userInput.units
            },
            {
                item_id: userInput.item
            }
        ], function (error, results) {
            if (error) throw error;
            console.log(results);
            console.log("hi");
        }
    )
    // update database
    // var query = /////
    connection.end();
}