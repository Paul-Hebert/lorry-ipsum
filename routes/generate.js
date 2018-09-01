var express = require('express');
var router = express.Router();
var contentGenerator = require('../helpers/contentGenerator');

router.get('/', function (req, res, next) {
    res.json({
        data: contentGenerator.buildContent(5)
    });
});

module.exports = router;
