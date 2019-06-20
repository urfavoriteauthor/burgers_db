CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);

INSERT INTO burgers(burger_name, eaten) VALUES("PLAIN JANE", false);
INSERT INTO burgers(burger_name, eaten) VALUES("WHOPPER", false);
INSERT INTO burgers(burger_name, eaten) VALUES("BACONATOR",false);