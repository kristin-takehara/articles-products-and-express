//jshint esversion: 6

const express = require('express');
const methodOverride = require('method-override');
const app = express();


app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

const expresshbs = require('express-handlebars');
const PORT = process.env.PORT || 8080;

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('testing');
});

app.listen(PORT, () => {
  console.log("Server listening on port: " + PORT);
});