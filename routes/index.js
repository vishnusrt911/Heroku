var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Home'
  });
});

/* GET home page. */
router.get('/home', (req, res, next) => {
  res.render('index', {
    title: 'Home'
  });
});

/* GET About page. */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET Projects page. */
router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET Services page. */
router.get('/services', function (req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET Contacts me  page. */
router.get('/contacts', function (req, res, next) {
  res.render('contactme', { title: 'Contacts'});
});

module.exports = router;
