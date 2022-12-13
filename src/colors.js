function randcolor() {
    return (Math.floor((Math.random() * 1000) % 255));
}

function setcolors() {
    console.log("Set Color: ", `rgb(${randcolor()}, ${randcolor()}, ${randcolor()})`)
    document.getElementById("picture").style.backgroundColor = `rgb(${randcolor()}, ${randcolor()}, ${randcolor()})`;
}