
chrome.tabs.onUpdated.addListener(function(id, info, tab){
    if (tab.url.toLowerCase().indexOf("facebook.com") > -1){
        chrome.tabs.executeScript(null, { "file" : "content.js" },function () {});
    }
});
