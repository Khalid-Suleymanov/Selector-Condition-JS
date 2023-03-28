
function Sum() {
    var f_num = Number(document.getElementById('f_num').value);
    var sec_num = Number(document.getElementById('sec_num').value);
    var sum = f_num + sec_num;
    console.log(sum);
    document.getElementById("h3").innerHTML = sum
}

function Division() {
    var f_num = parseFloat(document.getElementById('f_num').value);
    var sec_num = parseFloat(document.getElementById('sec_num').value);
    var division = f_num / sec_num;
    console.log(division);
    document.getElementById("h3").innerHTML = division
}

function Multiple() {
    var f_num = parseFloat(document.getElementById('f_num').value);
    var sec_num = parseFloat(document.getElementById('sec_num').value);
    var multiple = f_num * sec_num;
    console.log(multiple);
    document.getElementById("h3").innerHTML = multiple
}

function Minus() {
    var f_num = parseFloat(document.getElementById('f_num').value);
    var sec_num = parseFloat(document.getElementById('sec_num').value);
    var minus = f_num - sec_num;
    console.log(minus);
    document.getElementById("h3").innerHTML = minus
}