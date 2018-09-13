chrome.browserAction.disable(null, function(){});
chrome.tabs.onUpdated.addListener(function(id, info, tab){

    chrome.tabs.executeScript(null, { "file" : "jquery-3.3.1.min.js" },function () {});
    chrome.tabs.executeScript(null, { "file" : "dom_utils.js" },function () {});
    chrome.tabs.executeScript(null, { "file" : "append_answer_to_post.js" },function () {});
    if (tab.url.toLowerCase().indexOf("facebook.com") > -1){
        chrome.browserAction.enable(null, function(){});
        chrome.storage.sync.set({epigram: false});

        // chrome.tabs.executeScript(null, {"file": "content.js"}, function () {});


    }
});
