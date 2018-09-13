
chrome.tabs.onUpdated.addListener(function(id, info, tab){
    if (tab.url.toLowerCase().indexOf("facebook.com") > -1){
        chrome.tabs.executeScript(null, { "file" : "content.js" },function () {});
        $(document).on('DOMNodeInserted', function(elt) {
            if(elt.className == "_3ekx _29_4"){
            var z = elt.childNodes;
            if(z[0]) {
                var m = z[0].getElementsByClassName("_59tj _2iau");
                if (m.length) {
                    var child = elt.querySelector("a");
                    var y = child.getAttribute("href");
                    console.log(y.toString());
                }
            }
            }
        });
    }

});
