DROP DATABASE IF EXISTS "burger_db";

CREATE DATABASE "burger_db";

USE "burger_db";

CREATE TABLE "burgers" (
    "id" int NOT NULL AUTO_INCREMENT,
    "name" VARCHAR (45) NOT NULL,
    "devoured" BOOLEAN,
    PRIMARY KEY ("id"),
);

