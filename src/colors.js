function randcolor() {
    return (Math.floor((Math.random() * 1000) % 255));
}

function setcolors() {
    var picture = document.getElementById("picture");
    var children = picture.children;
    for (var i = 0; i < children.length; i++) {
        children[i].style.backgroundColor = `rgb(${randcolor()}, ${randcolor()}, ${randcolor()})`; 
    }
}