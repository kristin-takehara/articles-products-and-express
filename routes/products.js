//jshint esversion: 6

//ROUTES -- PRODUCTS
const express = require('express');
const exphbs = require('express-handlebars');
const router = express.Router();
const app = express();
app.use('/', router);


const Products = require('../db/products');
console.log(Products);
const products = new Products();

////////////ROUTER//////////
router.get('/', (req, res) => {
  res.render('/products/index', { products : products.getAllProducts() });
});

router.get('/new', (req, res) => {
  res.render('/products/new');
});

router.get('/:id', (req, res) => {
  res.render('/products/product', { products: products.find(req.params.id)});
});

//delete

router.get('/:id/edit', (req, res) => {
  res.render('/products/edit', { form: 'form' });
});

router.post('/', (req, res) => {
  // products.addProduct(req.body);
  res.render('/products/product', { products : products.addProduct(req.body) });
  // res.redirect('/products');
});

//error-handling?
router.use(function(err, req, res, next) {
  console.log(err.stack);
  res.status(500).send('Oops, something went wrong!');
});
module.exports = router;