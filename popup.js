var changeGreen = document.getElementById('changeGreen');
var originalBackgroundColor = document.body.style.backgroundColor;

changeGreen.onclick = function (element) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'document.body.style.backgroundColor = "green";' });
    });
};

var changeBlue = document.getElementById('changeBlue');

changeBlue.onclick = function (element) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'document.body.style.backgroundColor = "blue";' });
    });
};

var changeOrange = document.getElementById('changeOrange');

changeOrange.onclick = function (element) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'document.body.style.backgroundColor = "orange";' });
    });
};

var revert = document.getElementById('revert');

revert.onclick = function (element) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'document.body.style.backgroundColor = "' + originalBackgroundColor + '";' });
    });
}
