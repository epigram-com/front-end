
chrome.tabs.onUpdated.addListener(function(id, info, tab){
    chrome.tabs.executeScript(null, { "file" : "jquery-3.3.1.min.js" },function () {});
    if (tab.url.toLowerCase().indexOf("facebook.com") > -1){

        chrome.tabs.executeScript(null, { "file" : "content.js" },function () {});

    }
});
