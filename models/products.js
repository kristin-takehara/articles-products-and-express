//jshint esversion: 6
const db = require('./connection');

class Products {
  constructor() {

  }
//returns all products
  getAll() {
    let query = 'SELECT id, name, price, inventory FROM products ORDER by id ASC';
    return db.any(query)
      .catch((err) => {
        console.log('ERROR: Invalid Request', err);
      });
  }
//returns a single product item by id
  find(ID) {
    let id = product.id;
    let query = 'SELECT id, name, price, inventory FROM products WHERE id = ${id}';
    return db.any(query)
      .catch((err) => {
        console.log('ERROR: Invalid Product Request', err);
      });
  }
//create/add product to this._collection
  create(product) {
    let name = product.name;
    let price = product.price;
    let inventory = product.inventory;

    if(!name || !price || !inventory) {
    throw new Error('Invalid Product');
    }

    let query = 'INSERT INTO products VALUES (${name}, ${price}, ${inventory})';
    return db.any(query)
      .then((data) => {
      return product;
      })
      .catch((err) => {
        console.log('ERROR: Invalid Entry', err);
      });
  }
//update product//
  update(ID, product) {
    let id = product.id;
    let name = product.name;
    let price = product.price;
    let inventory = product.inventory;

    let query = 'SELECT name, price, inventory from products WHERE id = ${ID}';
    return db.any(query)
      .then((data) => {
        if (name) {
          db.any(`UPDATE products SET name = '${name}' WHERE id = ${ID}`);
        }

        if (price) {
          db.any(`UPDATE products SET price = '${price}' WHERE id = ${ID}`);
        }

        if (inventory) {
          db.any(`UPDATE products SET inventory = '${inventory}' WHERE id = ${ID}`);
        }

        return this.find(ID);
      })
      .catch((err) => {
        console.log('ERROR: Unable to update product', err);
      });
  }



}


module.exports = Products;