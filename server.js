//jshint esversion: 6

console.log('testing 1, 2');

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const pgr = require('postgres');
const PORT = process.env.PORT || 8080;
// const productsRoute = require('./routes/products');
// const articlesRoute = require('./routes/articles');

const server = express();
server.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));
server.set('view engine', '.hbs');

// server.use('/products', productsRoute);
// server.use('/articles', articlesRoute);

server.get('/', (req, res) => {
  res.send('hello');
  //must later insert res.reder
});

server.listen(PORT, () => {
  console.log("Server listening on port: " + PORT);
});

module.exports = server;