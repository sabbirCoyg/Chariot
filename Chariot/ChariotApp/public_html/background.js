// @author XZ
// Creates chrome extension for website.
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({url: chrome.extension.getURL('index.html')});
});