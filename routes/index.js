var express = require('express');
var router = express.Router();


/*
When a get request comes from app.js ,
render the page using index.ejs file
*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Page' });
});

/* GET product page. */
router.get('/product', function(req, res, next) {
  res.render('index', { title: 'Product Page' });
});

module.exports = router;
