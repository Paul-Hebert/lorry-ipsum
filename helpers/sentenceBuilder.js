fetchRowFromCSV = require("./fetchRowFromCSV");
fetchWord = require('./fetchWord');

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

exports.buildSentence = function(acceptedOEMs){
    var sentence = fetchRowFromCSV.fromURL("./words/sentence-structures.csv");

    do {
        sentence = sentence.replace("{noun}", fetchWord.noun(acceptedOEMs));
        sentence = sentence.replace("{adjective}", fetchWord.adjective());
        sentence = sentence.replace("{verb}", fetchWord.verb());
    } while (sentence.indexOf("{") !== -1);

    return sentence + getPunctuation();
}