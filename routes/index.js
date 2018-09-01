var express = require('express');
var router = express.Router();
var contentGenerator = require('../helpers/contentGenerator');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    content:contentGenerator.buildContent(5)
  });
});

module.exports = router;
