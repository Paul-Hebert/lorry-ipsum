var express = require('express');
var router = express.Router();
var contentGenerator = require('../helpers/contentGenerator');

var acceptedOEMs = ["Ford", "Chevy", "GMC", "Dodge", "International", "Hino", "Isuzu", "Nissan"];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: "Lorry Ipsum - Truck Themed Dummy Text",
    meta: "Lorry Ipsum is a truck themed lorem ipsum generator. Feel free to use this tool to help in your projects. In addition to a generator there is also a free API.",
    content:contentGenerator.buildContent(5, acceptedOEMs)
  });
});

module.exports = router;
