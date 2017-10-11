//jshint esversion: 6
console.log("You Cray Cray!");

const express = require('express');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const productsRoute = require('./routes/products');
const articlesRoute = require('./routes/articles');


const app = express();

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));

app.use(bodyParser.urlencoded({ "extended" : true})); //ensures server handles incoming requests through express
app.use(methodOverride('_method'));

app.use('/products', productsRoute);


app.set('view engine', '.hbs');

app.get('/', (req, res) => {
  res.send('Testing 1, 2, 3');
});

app.listen(PORT, () => {
  console.log("Server listening on port: " + PORT);
});

module.exports = app;