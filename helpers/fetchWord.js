fetchRowFromCSV = require("./fetchRowFromCSV");
configs = require('../configs').values;

var chanceOfOEMWord = .2

exports.verb = function () {
    var word = fetchRowFromCSV.fromURL("./words/verbs.csv");
    return word;
}; 

exports.noun = function (acceptedOEMs) {
    var url = "./words/nouns/generic.csv";

    if(typeof acceptedOEMs !== "undefined" && acceptedOEMs !== null){
        // Even when we have accepted OEMs 
        // we still want to use generic options most of the time.
        if(Math.random() > 1 - chanceOfOEMWord){
            // We're using an OEM word. Lets pick one of our OEMs at random.
            var selectedOEMIndex = Math.floor(Math.random() * acceptedOEMs.length);
            var selectedOEMName = acceptedOEMs[selectedOEMIndex];

            if(configs.acceptedOEMs.indexOf(selectedOEMName) !== "-1"){
                url = "./words/nouns/" + selectedOEMName.toLowerCase() + ".csv";
            } else{
                console.error('Invalid OEM');
            }
        }
    }

    var word = fetchRowFromCSV.fromURL(url);
    return word;
}; 

exports.adjective = function () {
    var word = fetchRowFromCSV.fromURL("./words/adjectives.csv");
    return word;
}; 