document.getElementById("tlSwitch").addEventListener("click", saveToggle);
document.getElementById("langIn").addEventListener("click", saveInput);
document.getElementById("langOut").addEventListener("click", saveOutput);


function saveToggle(){
    //console.log(document.getElementById("tlSwitch").checked);
    chrome.storage.sync.set({'tlToggle' : document.getElementById("tlSwitch").checked})
}

function saveInput(){
    //console.log(document.getElementById("langIn").value);
    chrome.storage.sync.set({'langIn' : document.getElementById("langIn").value})
}

function saveOutput(){
    //console.log(document.getElementById("langOut").value);
    chrome.storage.sync.set({'langOut' : document.getElementById("langOut").value})
}