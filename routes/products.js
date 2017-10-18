//jshint esversion: 6

//ROUTES -- PRODUCTS
const express = require('express');
const router = express.Router();
const Products = require('../models/products');
const products = new Products();

////////////ROUTER//////////

//get all products
router.get('/', (req, res) => {
  const productData = req.body;
  req.body = parseInt(req.body);
  return products.getAll(productData)
  .then((data) => {
    res.status(200)
    .json({
      status: 'success',
      message: 'all products displayed'
    });
    res.render('/products/index', { products : products.getAll()});
  })
  .catch((err) => {
    return next(err);
  });
});

//get new products
router.get('/new', (req, res) => {
  const productData = req.body;
  req.body = parseInt(req.body);
  return products.getNew(productData)
  .then((data) => {
    res.status(200)
    .json({
      status: 'success',
      message: 'new products'
    });
    res.render('/products/new', { products : products.getNew });
  })
  .catch((err) => {
    return next(err);
  });
});

//add a product: ???
router.post('/', (req, res) => {
  //take data off of req.body and put into variables
  const productData = req.body;
  req.body = parseInt(req.body);
  return products.create(productData)
  .then((data) => {
    //evaluate the success of data returned
    res.status(200)
    .json ({
      status: 'success',
      message: 'added to list'
    });
    res.render('/products/product', { products : products.create(req.body) });
    //could do res.redirect(/products/data.id)
    res.redirect('/products/data.id');
  })
  .catch((err) => {
    return next(err);
  });


});


//error-handling?
router.use(function(err, req, res, next) {
  console.log(err.stack);
  res.status(500).send('Oops, something went wrong!');
});

module.exports = router;