document.body.onload = addElement;

function addElement() {

    chrome.storage.local.get("onOff", (result) => {

        if (result.onOff === true) {

            const newDiv = document.createElement("div");
            newDiv.setAttribute("class", "draggable ");
            newDiv.setAttribute("contenteditable", "true");


            const newContent = document.createTextNode("testingfaweawf12");
            newDiv.appendChild(newContent);


            document.body.appendChild(newDiv);

            var draggable = document.getElementsByClassName('draggable');

            for (var i = 0; i < draggable.length; i += 1) {
                draggable[i].addEventListener('mousedown', startDrag);

            }

            //changesize script
            chrome.storage.local.get("fSize", (result) => {

                console.log("changingSize" + result.fSize);

            
                for (var i = 0; i < draggable.length; i += 1) {
            
                    draggable[i].style.fontSize = result.fSize + "px";
            
                }
            });

            //changefont script
            chrome.storage.local.get("newFont", (result) => {

                console.log("changingFont" + result.newFont);

            
                for (var i = 0; i < draggable.length; i += 1) {
            
                    draggable[i].style.fontFamily = result.newFont;
            
                    console.log("font is now" + getComputedStyle(draggable[i]).getPropertyValue("font-family"));
                }
                
            });
            console.log("passed onOff, added element");

        }
        else{

            var draggable = document.getElementsByClassName('draggable');

            for (var i = 0; i < draggable.length; i += 1) {

                remove(draggable[i]);
        
            }
        }


    });
    

}


function startDrag(evt) {


    var diffX = evt.clientX - this.offsetLeft,
        diffY = evt.clientY - this.offsetTop,
        that = this;


    function moveAlong(evt) {
        that.style.left = (evt.clientX - diffX) + 'px';
        that.style.top = (evt.clientY - diffY) + 'px';
    }


    function stopDrag() {
        document.removeEventListener('mousemove', moveAlong);
        document.removeEventListener('mouseup', stopDrag);
    }

    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('mousemove', moveAlong);
}

