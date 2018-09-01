fetcRowFromCSV = require("./fetchRowFromCSV");

exports.verb = function () {
    var word = fetcRowFromCSV.fromURL("./words/verbs.csv");
    return word;
}; 

exports.noun = function () {
    var word = fetcRowFromCSV.fromURL("./words/nouns/generic.csv");
    return word;
}; 

exports.adjective = function () {
    var word = fetcRowFromCSV.fromURL("./words/adjectives.csv");
    return word;
}; 