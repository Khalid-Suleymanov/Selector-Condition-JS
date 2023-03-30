var grpNum = document.getElementById('grpNum');
function doColor() {
    var lasThreeValue = document.getElementById('txt').value.slice(-3,-2);
    var lastTxt = document.getElementById('txt').value
    if (lasThreeValue[0] == 1) {
        grpNum.style.color = 'yellow';
        grpNum.innerHTML = lastTxt;
    }
    else if (lasThreeValue[0] == 2) {
        grpNum.style.color = 'red';
        grpNum.innerHTML = lastTxt
    }
    else if (lasThreeValue[0] == 3) {
        grpNum.style.color = 'black';
        grpNum.innerHTML = lastTxt
    }
    else {
        alert("There is no such group")
    }
}


// function doColor() {
//     var y = document.getElementById("input").value
//     var x = x.slice(-3, -2)
//     if (x == 1) {
//         document.getElementById("evening").innerHTML = `Evening group`
//     }
//     else if (x == 2) {
//         document.getElementById("afternoon").innerHTML = `Noon group`
//     }
//     else if (x == 3) {
//         document.getElementById("morn").innerHTML = `Morning group`
//     }
// }
