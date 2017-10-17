CREATE USER appUser
WITH ENCRYPTED PASSWORD 'password';

CREATE TABLE articles (
id        SERIAL        PRIMARY KEY,
title     VARCHAR(255)  NOT NULL,
body      VARCHAR(255)  NOT NULL,
author    VARCHAR(255)  NOT NULL,
url       VARCHAR(255)  NOT NULL
);

CREATE TABLE products (
id        SERIAL        PRIMARY KEY,
name      VARCHAR(255)  NOT NULL,
price     DECIMAL       NOT NULL,
inventory INTEGER       NOT NULL
);


