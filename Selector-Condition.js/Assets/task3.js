// var grpNum = document.getElementById('grpNum');
// function doColor() {
//     var lasThreeValue = document.getElementById('txt').value.slice(-3);
//     var lastTxt = document.getElementById('txt').value
//     if (lasThreeValue[0] == 1) {
//         grpNum.style.color = 'yellow';
//         grpNum.innerHTML = lastTxt;
//     }
//     else if (lasThreeValue[0] == 2) {
//         grpNum.style.color = 'red';
//         grpNum.innerHTML = lastTxt
//     }
//     else {
//         grpNum.style.color = 'black';
//         grpNum.innerHTML = lastTxt
//     }
// }

function doColor() {
    var x = document.getElementById("input").value
    var y = x.slice(-3, -2)
    if (y == 1) {
        document.getElementById("evening").innerHTML = `Evening group`
    }
    else if (y == 2) {
        document.getElementById("afternoon").innerHTML = `Noon group`
    }
    else if (y == 3) {
        document.getElementById("morn").innerHTML = `Morning group`
    }
}