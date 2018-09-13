document.addEventListener('DOMContentLoaded', function(){

    var input = document.getElementById('ep-option');


    chrome.storage.sync.get("epigram", function(data){
        if (data["epigram"]){
            input.checked = true;
        } else {
            input.checked = false;
        }
    });


    input.addEventListener("change", function(){
        chrome.storage.sync.set({epigram: input.checked});
        if(input.checked) {

            chrome.tabs.executeScript(null, {"file": "content.js"}, function () {
            });
            $(".epigram").show();
        } else {
            $(".epigram").hide();
        }
    });

});