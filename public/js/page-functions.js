var domain = "https://lorry-ipsum.com";

function generateURL(){
    var url = '/generate';

    url += "?ParagraphCount=" + document.querySelector("[name=ParagraphCount]").value;

    var selectedOEMInputs = document.querySelectorAll('input:checked');

    if(selectedOEMInputs.length > 0){
        var params = []
        selectedOEMInputs.forEach(function(input){
            params.push(input.getAttribute("name"));
        });

        url += "&AcceptedOEMs=" + params.join(",");
    }

    return url;
}

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("formOptions");
    
    form.addEventListener("submit", function(e){
        e.preventDefault();

        url = generateURL();

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send(null);

        xhr.onreadystatechange = function () {
            var DONE = 4; // readyState 4 means the request is done.
            var OK = 200; // status 200 is a successful return.

            if (xhr.readyState === DONE) {
                if (xhr.status === OK){
                    // remove old content
                    var oldContent = document.getElementById("generatedContent");

                    oldContent.parentNode.removeChild(oldContent);

                    // generate new content
                    var data = JSON.parse(xhr.responseText).data;

                    var newHTML = document.createElement('div');
                    newHTML.id = "generatedContent";

                    for(var i = 0; i < data.length; i++){
                        var p = document.createElement('p');
                        var newContent = document.createTextNode(data[i]);
                        p.appendChild(newContent);
                        newHTML.appendChild(p)
                    }

                    document.getElementById("generatedContentWrapper").appendChild(newHTML);
                }
            }
        };
    }, false);

    document.querySelectorAll('.boundNumberRange input').forEach(function(input){
        input.addEventListener("change", function(){
            var siblings = input.parentNode.childNodes;
            siblings.forEach(function(sibling){
                if(sibling !== input){
                    sibling.value = input.value;
                }
            });
        });
    });

    document.querySelectorAll('input').forEach(function(input){
        input.addEventListener("change", function(){
            // remove old content
            var oldContent = document.getElementById("APIURL");

            oldContent.parentNode.removeChild(oldContent);

            // generate new content
            var newHTML = document.createElement('code');
            newHTML.id = "APIURL";
            newHTML.className = "block";

            var newContent = document.createTextNode(domain + generateURL());
            newHTML.appendChild(newContent)

            document.getElementById("APIURLWrapper").appendChild(newHTML);
        });
    });

    document.getElementById('copy').addEventListener('click', function(){
        window.getSelection().selectAllChildren( document.getElementById("generatedContent"));
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    });
});