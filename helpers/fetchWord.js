fetchRowFromCSV = require("./fetchRowFromCSV");

exports.verb = function () {
    var word = fetchRowFromCSV.fromURL("./words/verbs.csv");
    return word;
}; 

exports.noun = function () {
    var word = fetchRowFromCSV.fromURL("./words/nouns/generic.csv");
    return word;
}; 

exports.adjective = function () {
    var word = fetchRowFromCSV.fromURL("./words/adjectives.csv");
    return word;
}; 