var grpNum = document.getElementById('grpNum');
function doColor() {
    var lasThreeValue = document.getElementById('txt').value.slice(-3);
    var lastTxt = document.getElementById('txt').value
    if (lasThreeValue[0] == 1) {
        grpNum.style.color = 'yellow';
        grpNum.innerHTML = lastTxt;
    }
    else if (lasThreeValue[0] == 2) {
        grpNum.style.color = 'red';
        grpNum.innerHTML = lastTxt
    }
    else {
        grpNum.style.color = 'black';
        grpNum.innerHTML = lastTxt
    }
}