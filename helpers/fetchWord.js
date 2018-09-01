var fs = require('fs');
var Papa = require('papaparse');

fromURL = function (url) {
    var content = fs.readFileSync(url, "utf8");

    var word = "";

    Papa.parse(content, {
        header: false,
        delimiter: "\t",
        complete: function(results) {
            var rows = results.data;
            var length = rows.length;
            var index = Math.floor(Math.random() * length);

            console.log(rows);
            console.log(index);
            console.log(rows[index][0]);

            word = rows[index][0];
        }
    });

    return word;
}

exports.getVerb = function () {
    var word = fromURL("./words/verbs.csv");
    return word;
}; 

exports.getNoun = function () {
    var word = fromURL("./words/nouns/generic.csv");
    return word;
}; 

exports.getAdjective = function () {
    var word = fromURL("./words/adjectives.csv");
    return word;
}; 