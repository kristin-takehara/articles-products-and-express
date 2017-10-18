\c KRISTINTAKEHARA

DROP DATABASE IF EXISTS articles_products;
DROP USER IF EXISTS appUser;

CREATE USER appUser
WITH ENCRYPTED PASSWORD 'password';

CREATE DATABASE articles_products
WITH OWNER appUser;

\c articles_products;

CREATE TABLE articles (
id        SERIAL        PRIMARY KEY,
title     VARCHAR(255)  NOT NULL      UNIQUE,
body      VARCHAR(255)  NOT NULL,
author    VARCHAR(255)  NOT NULL,
url       VARCHAR(255)  NOT NULL
);

CREATE TABLE products (
id        SERIAL        PRIMARY KEY,
name      VARCHAR(255)  NOT NULL      UNIQUE,
price     DECIMAL       NOT NULL,
inventory INTEGER       NOT NULL
);


DROP INDEX IF EXISTS name_index;
CREATE INDEX name_index ON products (name);