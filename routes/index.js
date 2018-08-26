var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Friends for Lesbian, Gay, Bisexual, Transgender, and Queer Concerns', navbar_title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

router.get('/gatherings', function(req, res, next) {
  res.render('index', { title: 'Gatherings' });
});

router.get('/resources', function(req, res, next) {
  res.render('index', { title: 'Outreach/Resources' });
});

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

module.exports = router;
