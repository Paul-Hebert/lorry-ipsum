var express = require('express');
var router = express.Router();
var contentGenerator = require('../helpers/contentGenerator');

router.get('/', function (req, res, next) {
    var count = req.param("ParagraphCount");

    // handle malformed or missing request data
    if(typeof count === "undefined" || count === null || Number.isNaN(count) || count < 1){
        count = 5;
    }

    res.json({
        data: contentGenerator.buildContent(count)
    });
});

module.exports = router;
