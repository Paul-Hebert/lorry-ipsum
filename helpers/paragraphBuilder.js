sentenceBuilder = require('./sentenceBuilder');
configs = require("../configs").values;

exports.buildParagraph = function(acceptedOEMs){
    var currentModifier = Math.floor(Math.random() * configs.paragraphLengthVariability);

    currentModifier = Math.random() > .5 ? currentModifier : currentModifier * -1;

    var currentLength = configs.paragraphLength + currentModifier;

    var paragraph = "";

    for(var i = 0; i < currentLength; i++){
        paragraph += sentenceBuilder.buildSentence(acceptedOEMs);
    }

    return paragraph;
}