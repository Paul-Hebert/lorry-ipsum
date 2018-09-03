var express = require('express');
var router = express.Router();
var contentGenerator = require('../helpers/contentGenerator');
var configs = require('../configs').values;

router.get('/', function (req, res, next) {
    var count = req.param("ParagraphCount");

    // handle malformed or missing request data
    if(typeof count === "undefined" || count === null || Number.isNaN(count) || count < 1){
        count = configs.defaultParagraphCount;
    }

    var acceptedOEMs = null;

    if(typeof req.param("AcceptedOEMs") !== "undefined"){
        acceptedOEMs = req.param("AcceptedOEMs").split(",");
    }

    res.json({
        data: contentGenerator.buildContent(count, acceptedOEMs)
    });
});

module.exports = router;
