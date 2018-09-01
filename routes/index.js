var express = require('express');
var router = express.Router();
var fetchWord = require('../helpers/fetchWord');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    noun1: fetchWord.getNoun(),
    noun2: fetchWord.getNoun(),
    verb1: fetchWord.getVerb(),
    adjective1: fetchWord.getAdjective(),
  });
});

module.exports = router;
