const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "bamazon",
  password: "somepassword123456",
  database: "bamazon"
});

connection.connect(function(error) {
  if (error) throw error;
  console.log("\nConnected as ID: " + connection.threadId + "\n");
  showMenu();
});

// global variables
// ==========================================================================================================================

// functions
// ==========================================================================================================================

function showMenu() {
  inquirer
    .prompt([
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
    ])
    .then(function(answer) {
      console.log(answer);
      console.log(answer.action);
      switch (answer) {
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
    });
}

function viewInventory() {
  var query = "SELECT * FROM products WHERE stock_quantity > 0";
  connection.query(query, function(error, results) {
    if (error) throw error;
    console.log("hi");
    console.table(results);
    // connection.end();
  });
  connection.end();
}

// function lowInventory() { }

// function addToInventory() { }

// function newProduct() { }
