// DATABASE CONNECTION

const pgp = require('pg-promise')();

const connection = {
  host: 'localhost',
  port: 5432,
  database: 'articles_products',
  user: 'appUser',
  password: 'password'
};

const db = pgp(connection);

module.exports = db;