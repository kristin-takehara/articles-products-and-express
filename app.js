//jshint esversion: 6
console.log("You Cray Cray!");

const express = require('express');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');

const app = express();

const router = express.Router();

app.use(bodyParser.urlencoded({ "extended" : true}));

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));

app.set('view engine', '.hbs');

const expresshbs = require('express-handlebars');
const PORT = process.env.PORT || 8080;

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('Testing 1, 2, 3');
});

app.listen(PORT, () => {
  console.log("Server listening on port: " + PORT);
});

module.exports = router;