//jshint esversion: 6
const express = require('express');
const exphbs = require('express-handlebars');
const router = express.Router();

const Articles = require('../db/articles');
const articles = new Articles();


const app = express();
app.use('/', router);

