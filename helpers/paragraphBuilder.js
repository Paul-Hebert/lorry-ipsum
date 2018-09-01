sentenceBuilder = require('./sentenceBuilder');

exports.buildParagraph = function(acceptedOEMs){
    var defaultLength = 5;
    var lengthModifier = 3;

    var currentModifier = Math.floor(Math.random() * lengthModifier);

    currentModifier = Math.random() > .5 ? currentModifier : currentModifier * -1;

    var currentLength = defaultLength + currentModifier;

    var paragraph = "";

    for(var i = 0; i < currentLength; i++){
        paragraph += sentenceBuilder.buildSentence(acceptedOEMs);
    }

    return paragraph;
}