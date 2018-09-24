var express = require('express');
var router = express.Router();

var random_header_image = function() {
  var all_images = ["eaoko7i6aucw79k/pic11.jpg", "eaoko7i6aucw79k/pic11.jpg", "dsrh77eypwg27sv/horiz-cabaret.jpg", "k61kdtpf96e2jsb/horiz-couch.jpg", "lod0l2sh6sy4u5f/horiz-outdoors1.jpg", "ztr1vp636crweiu/horiz-outdoors2.jpg", "d9t31g6z8d64q6q/horiz-outdoors3.jpg", "7wrpqtalykrav7e/horiz-phones.jpg", "elleyakhdfs5o37/horiz-talk.jpg", "isjwpz07g0dd7jm/vert-veil1.jpg", "ms7q2v56kz3t1sn/vert-veil2.jpg"]
  return "http://dl.dropboxusercontent.com/s/" + all_images[Math.floor(Math.random() * all_images.length)];
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

module.exports = router;
