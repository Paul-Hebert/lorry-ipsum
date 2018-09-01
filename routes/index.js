var express = require('express');
var router = express.Router();
var paragraphBuilder = require('../helpers/paragraphBuilder');

var buildContent = function(){
  var paragraphs = [];
  var paragraphLength = 5;

  for(var i = 0; i < paragraphLength; i++){
    paragraphs.push(paragraphBuilder.buildParagraph());
  }

  return paragraphs;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    content:buildContent()
  });
});

module.exports = router;
