//jshint esversion: 6

//ROUTES-ARTICLES
const express = require('express');
const exphbs = require('express-handlebars');
const router = express.Router();

const Articles = require('../models/articles');

const myArticles = [
  {
    title: 'Magnolia Journal - First Issue',
    urlTitle: 'Magnolia%20Journal%20-%20First%20Issue',
    body: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. For I know the plans I have for you,” declares the LORD, “plans to prosper you and not to harm you, plans to give you hope and a future. And we know that in all things God works for the good of those who love him, who have been called according to his purpose. I can do everything through him who gives me strength. In the beginning God created the heavens and the earth.',
    author: 'Joanna Gaines'
  },

  {
    title: 'Magnolia Journal - Second Issue',
    urlTitle: 'Magnolia%20Journal%20-%20Second%20Issue',
    body: 'Trust in the LORD with all your heart and lean not on your own understanding in all your ways acknowledge him, and he will make your paths straight. Do not conform any longer to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God’s will is—his good, pleasing and perfect will. Do not be anxious about anything, but in everything, by prayer and petition, with thanksgiving, present your requests to God. Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit. For it is by grace you have been saved, through faith—and this not from yourselves, it is the gift of God.',
    author: 'Joanna Gaines'
  },

  {
    title: 'Magnolia Journal - Third Issue',
    urlTitle: 'Magnolia%20Journal%20-%20Third%20Issue',
    body: 'Therefore, I urge you, brothers, in view of God’s mercy, to offer your bodies as living sacrifices, holy and pleasing to God—this is your spiritual act of worship. The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full. For I am with you, and no one is going to attack and harm you, because I have many people in this city.” One night the Lord spoke to Paul in a vision: “Do not be afraid; keep on speaking, do not be silent. So Paul stayed for a year and a half, teaching them the word of God. I have been crucified with Christ and I no longer live, but Christ lives in me. The life I live in the body, I live by faith in the Son of God, who loved me and gave himself for me.',
    author: 'Joanna Gaines'
  }
];
const articles = new Articles(myArticles);

////////////ROUTER//////////
router.get('/', (res, req) => {
  res.render('/articles/index', { articles : articles.getAllArticles() });
});

router.get('/new', (req, res) => {
  res.render('/articles/new');
});

router.get('/:title', (req, res) => {
  res.render('/articles/article', { articles: articles.find(req.params.title)});
});

router.delete('/:title', (req, res) => {
  articles.delete(req.params.title);
  res.redirect('/articles'); //<<<--is this the correct redirect path?
});

router.get('/:title/edit', (req, res) => {
  res.render('/articles/edit' , { articles : articles.find(req.params.title) });
});

router.post('/', (req, res) => {
  const newArticle = articles.create(req.body);

  if(newArticle) {
    return res.redirect('/articles');
  }
});

//error-handling?
router.use(function(err, req, res, next) {
  console.log(err.stack);
  res.status(500).send('Oops, something went wrong!');
});



module.exports = router;