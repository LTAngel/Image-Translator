var inLang = document.getElementById("inLang");
var outLang = document.getElementById("outLang");
var onOff = document.getElementById("onOff");
var newFont = document.getElementById("newFont");
var fSize = document.getElementById("fSize");

var tab;

document.addEventListener('DOMContentLoaded', function () {

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        tab = tabs[0];
    });


    //retrieve and set languages on startup
    chrome.storage.local.get("inLang", (result) => {
        inLang.value = result.inLang;
    });

    chrome.storage.local.get("outLang", (result) => {
        outLang.value = result.outLang;
    });

    chrome.storage.local.get("newFont", (result) => {
        newFont.value = result.newFont;
    });

    chrome.storage.local.get("fSize", (result) => {
        fSize.value = result.fSize;

    });

    chrome.storage.local.get("onOff", (result) => {
        onOff.checked = result.onOff;

    });

});




//set and remember input and output languages on change
inLang.addEventListener("change", (event) => {
    chrome.storage.local.set({ "inLang": inLang.value });
});


outLang.addEventListener("change", (event) => {
    chrome.storage.local.set({ "outLang": outLang.value });
});

onOff.addEventListener("change", (event) => {
    chrome.storage.local.set({ "onOff": onOff.checked });
});

newFont.addEventListener("change", (event) => {
    chrome.storage.local.set({ "newFont": newFont.value },
        function () {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ["changeFont.js"]
            });
        });
});

fSize.addEventListener("change", (event) => {
    chrome.storage.local.set({ "fSize": fSize.value },
        function () {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ["changeSize.js"]
            });
        });
});


