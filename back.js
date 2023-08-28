let url;
chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
    chrome.tabs.get(tabId, current_tab_info => {
        url = current_tab_info.url;
        console.log("this is" + url);
    })
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
        if (request.type == "get"){
            sendResponse({result: url});
        }
    })
  });
