fetchRowFromCSV = require("./fetchRowFromCSV");
fetchWord = require('./fetchWord');

var chanceOfSecondClause = 0.3;

getPunctuation = function(){
    var index = Math.random();

    if(index < .1){
        return "? ";
    } else if(index < .3){
        return "! ";
    } else{
        return ". ";
    }
}

fetchClause = function(){
    return fetchRowFromCSV.fromURL("./words/clauses.csv");
}

exports.buildSentence = function(acceptedOEMs){
    var multipleClauses = Math.random() < chanceOfSecondClause;
    var sentence = fetchClause();

    // Fetch a second clause and a conjunction to join them.
    if(multipleClauses){
        var conjunction =  fetchRowFromCSV.fromURL("./words/conjunctions.csv");
        var secondClause = fetchClause();
        sentence += " " + conjunction + " " + secondClause;
    }

    // Keep replacing tokens until none remain
    do {
        sentence = sentence.replace("{noun}", fetchWord.noun(acceptedOEMs));
        sentence = sentence.replace("{adjective}", fetchWord.adjective());
        sentence = sentence.replace("{verb}", fetchWord.verb());
    } while (sentence.indexOf("{") !== -1);

    // Capitalize the first letter of the sentence
    sentence = sentence.charAt(0).toUpperCase() + sentence.substr(1);

    return sentence + getPunctuation();
}