//jshint esversion: 6
const express = require('express');
const exphbs = require('express-handlebars');
const router = express.Router();

const Products = require('../db/products');
const products = new Products();

///////////////SERVER//////////////
const app = express();
app.use('/', router);

// app.use('/db:id',function (req, res, next) {
//   //if the product ID is 0, skip to the next route.
//   if (req.params.id === '0') next('route');
//     else next();
// },function (req, res, next) {
//   //render main page
//   res.render('main');
// });

app.get('/', (req, res) => {
  res.render('index', { products : products.getAllProducts()});
});

app.post('/', (req, res) => {
  products.addProduct(req.body);
  res.redirect('/products');
});

//error-handling?
app.use(function(err, req, res, next) {
  console.log(err.stack);
  res.status(500).send('Oops, something went wrong!');
});

////////////////ROUTER////////////////////
router.get('/new', (req, res) => {
  res.render('new');
});

router.get('/:id', (req, res) => {
  res.render('product', {product: 'some product'});
});

router.get('/:id/edit', (req, res) => {
  res.render('edit', { form: 'form' });
});

module.exports = router;