document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("formOptions");
    
    form.addEventListener("submit", function(e){
        e.preventDefault();

        var url = '/generate';

        url += "?ParagraphCount=" + document.querySelector("[name=ParagraphCount]").value;

        var selectedOEMInputs = document.querySelectorAll(':checked');

        if(selectedOEMInputs.length > 0){
            var params = []
            selectedOEMInputs.forEach(function(input){
                params.push(input.getAttribute("name"));
            });

            url += "&AcceptedOEMs=" + params.join(",");
        }

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
});