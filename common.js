require("dotenv").config();
const mysql = require("mysql");

exports.createConnection = function () {
    return mysql.createConnection({
        host: process.env.HOST,
        port: process.env.PORT,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });
}

exports.openConnection = function (connection) {
    connection.connect(function(error) {
        if (error) throw error;
        console.log("\nConnected as ID: " + connection.threadId + "\n");
    });
}

exports.closeConnection = function(connection) {
    connection.end();
}