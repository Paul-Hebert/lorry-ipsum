var paragraphBuilder = require('../helpers/paragraphBuilder');

exports.buildContent = function(length, OEMs){
  var paragraphs = [];

  for(var i = 0; i < length; i++){
    paragraphs.push(paragraphBuilder.buildParagraph());
  }

  return paragraphs;
}