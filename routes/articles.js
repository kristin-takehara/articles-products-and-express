//jshint esversion: 6
const express = require('express');
const exphbs = require('express-handlebars');
const router = express.Router();

const Articles = require('../db/articles');
const articles = new Articles();

//////////////SERVER///////////
const app = express();
app.use('/', router);

app.get('/', (res, req) => {
  res.render('index', { articles : articles.getAllArticles() });
});

app.post('/', (req, res) => {
  articles.addArticle(req.body);
  res.redirect('/articles');
});

//error-handling?
app.use(function(err, req, res, next) {
  console.log(err.stack);
  res.status(500).send('Something Broke!');
});

////////////ROUTER//////////
router.get('new', (req, res) => {
  res.render('new');
});

router.get('/title', (req, res) => {
  res.render('articles', { articles: 'some article'});
});

router.get('/title/edit', (req, res) => {
  res.render('edit' , { form : 'form'});
});

module.exports = router;