//jshint esversion: 6

const pgp = require('pg-promise') ();

const connection = {
  host: 'localhost',
  port: 5432,
  database: 'dbSetUp.sql',
  user: 'appUser',
  password: 'password'
};

const db = pgp(connection);

class Products {
//create/add product to this._collection
create(product) {
  let name = product.name;
  let price = product.price;
  let inventory = product.inventory;

  if(!name || !price || !inventory) {
    throw new Error('Invalid Product');
  }

  let query = 'INSERT INTO products VALUES ($1, $2, $3)';
  let params = [name, price, inventory];
  return db.any(query, params);
  }

}


module.exports = Products;