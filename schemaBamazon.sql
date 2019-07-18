DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL (10,2) NOT NULL,
    stock_quantity INT (10) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mario Kart", "games", 50, 25), ("Super Smash Bros", "games", 50, 5), ("iMac", "computers", 10000, 10), ("MacBook Pro", "computers", 4000, 10), ("Playstation", "consoles", 400, 2), ("Game Cube", "consoles", 100, 9), ("Hoodie", "clothing", 50, 100), ("Shirt", "clothing", 20, 200), ("Mug", "drinkware", 15, 50), ("Cocktail Glasses", "drinkware", 60, 40);

