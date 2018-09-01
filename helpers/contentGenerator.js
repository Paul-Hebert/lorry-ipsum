var paragraphBuilder = require('../helpers/paragraphBuilder');

exports.buildContent = function(length, acceptedOEMs){
  var paragraphs = [];

  for(var i = 0; i < length; i++){
    paragraphs.push(paragraphBuilder.buildParagraph(acceptedOEMs));
  }

  return paragraphs;
}