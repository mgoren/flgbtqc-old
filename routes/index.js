// const path = require('path');
// const auth = require('http-auth');

// const basic = auth.basic({ file: path.join(__dirname, '../users.htpasswd') });

var express = require('express');
var router = express.Router();

var random_header_image = function() {
  var all_images = ["pic11.jpg", "horiz-cabaret.jpg", "horiz-couch.jpg", "horiz-outdoors1.jpg", "horiz-outdoors2.jpg", "horiz-outdoors3.jpg", "horiz-phones.jpg", "horiz-talk.jpg", "vert-veil1.jpg", "vert-veil2.jpg"]
  return "/images/" + all_images[Math.floor(Math.random() * all_images.length)];
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Friends for Lesbian, Gay, Bisexual, Transgender, and Queer Concerns', navbar_title: 'Home', header_image: random_header_image() });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About', header_image: random_header_image() });
});

router.get('/gatherings', function(req, res, next) {
  res.render('gatherings', { title: 'Gatherings', header_image: random_header_image() });
});

router.get('/resources', function(req, res, next) {
  res.render('resources', { title: 'Outreach/Resources', header_image: random_header_image() });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact', header_image: random_header_image() });
});

router.get('/resources/donate', function(req, res, next) {
  res.render('resources/donate', { title: 'Donate', header_image: random_header_image() });
});

router.get('/resources/listfaq', function(req, res, next) {
  res.render('resources/listfaq', { title: 'Email List FAQ' });
});

router.get('/resources/each_of_us_inevitable', function(req, res, next) {
  res.render('resources/each_of_us_inevitable', { title: 'Each of Us Inevitable' });
});

router.get('/resources/marriageminutes', function(req, res, next) {
  res.render('resources/marriageminutes', { title: 'Marriage Minutes' });
});

router.get('/resources/transminutes', function(req, res, next) {
  res.render('resources/transminutes', { title: 'Transgender Minutes' });
});

router.get('/resources/epistles', function(req, res, next) {
  res.render('resources/epistles', { title: 'Epistles' });
});

router.get('/minutes', function(req, res, next) {
  res.render('minutes', { title: '2018 Minutes' });
});

// router.get('/private', auth.connect(basic), function(req, res, next) {
//   res.render('private', { title: 'Private' });
// });

module.exports = router;
