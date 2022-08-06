chrome.tabs.onUpdated.addListener(function(tab, changeInfo){
    //if extension on and page loads
    console.log("SOMETHING");
    document.getElementById("tlSwitch").checked = chrome.storage.sync.get("tlToggle");
    document.getElementById("langIn").value = chrome.storage.sync.get("langIn");
    document.getElementById("langOut").value = chrome.storage.sync.get("langOut");


    if(changeInfo.status == 'complete' && document.getElementById("tlSwitch").checked){
        //find images
        let imgs = document.getElementsByTagName('img'), len = imgs.length, i;
        for(i = 0; i < len; i++){
            console.log("img detected");
            //put text on page

        } 
        //translate
        //put it back on page
    }

    
});