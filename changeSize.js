chrome.storage.local.get("fSize", (result) => {

    console.log("changingSize" + result.fSize);
    var draggable = document.getElementsByClassName('draggable');

    for (var i = 0; i < draggable.length; i += 1) {

        draggable[i].style.fontSize = result.fSize + "px";

    }
});