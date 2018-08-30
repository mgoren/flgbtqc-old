var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Friends for Lesbian, Gay, Bisexual, Transgender, and Queer Concerns', navbar_title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/gatherings', function(req, res, next) {
  res.render('gatherings', { title: 'Gatherings' });
});

router.get('/resources', function(req, res, next) {
  res.render('resources', { title: 'Outreach/Resources' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/resources/listfaq', function(req, res, next) {
  res.render('resources/listfaq', { title: 'Email List FAQ' });
});

router.get('/resources/each_of_us_inevitable', function(req, res, next) {
  res.render('resources/each_of_us_inevitable', { title: 'Each of Us Inevitable' });
});

module.exports = router;
