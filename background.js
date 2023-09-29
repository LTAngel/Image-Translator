// chrome.tabs.onActivated.addListener((tab) => {
//     if (tab.url?.startsWith("chrome://")) return undefined;

//     chrome.tabs.get(tab.tabId, (CurrentTabData) => {


//         chrome.storage.local.get("onOff", (result) => {

//             if (result.onOff === true) {
                
//                 chrome.scripting.executeScript({
//                     target: { tabId: CurrentTabData.id },
//                     files: ['contentScript.js']
//                 })

//             }
//         });


//     })
// }
// )