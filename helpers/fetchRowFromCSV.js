var fs = require('fs');
var Papa = require('papaparse');

exports.fromURL = function (url) {
    var content = fs.readFileSync(url, "utf8");

    var word = "";

    Papa.parse(content, {
        header: false,
        delimiter: "\t",
        complete: function(results) {
            var rows = results.data;
            var length = rows.length;
            var index = Math.floor(Math.random() * length);

            word = rows[index][0];
        }
    });

    return word;
}