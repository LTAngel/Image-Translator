chrome.storage.local.get("newFont", (result) => {

    console.log("changingFont" + result.newFont);
    var draggable = document.getElementsByClassName('draggable');

    for (var i = 0; i < draggable.length; i += 1) {

        draggable[i].style.fontFamily = result.newFont;

        console.log("font is now" + getComputedStyle(draggable[i]).getPropertyValue("font-family"));
    }
    
});