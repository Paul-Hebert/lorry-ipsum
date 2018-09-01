var express = require('express');
var router = express.Router();
var contentGenerator = require('../helpers/contentGenerator');

var acceptedOEMs = ["Ford", "Chevy", "GMC", "Dodge", "International", "Hino", "Isuzu", "Nissan"];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    content:contentGenerator.buildContent(5, acceptedOEMs)
  });
});

module.exports = router;
