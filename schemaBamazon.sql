DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products
(
    item_id INT
    AUTO_INCREMENT NOT NULL,
    product_name VARCHAR
    (255) NOT NULL,
    department_name VARCHAR
    (100) NOT NULL,
    price DECIMAL
    (10,2) NOT NULL,
    stock_quantity INT
    (10) NOT NULL,
    PRIMARY KEY
    (item_id)
);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Mario Kart", "games", 50.55, 25),
        ("Super Smash Bros", "games", 50.00, 5),
        ("iMac", "computers", 10000.00, 10),
        ("MacBook Pro", "computers", 4000.00, 10),
        ("Playstation", "consoles", 400.00, 8),
        ("Game Cube", "consoles", 100.00, 9),
        ("Hoodie", "clothing", 50.00, 100),
        ("Shirt", "clothing", 20.00, 200),
        ("Mug", "drinkware", 15.00, 50),
        ("Cocktail Glasses", "drinkware", 60.00, 40);

