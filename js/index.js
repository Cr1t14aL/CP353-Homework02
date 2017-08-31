    var isUpper = false;
    var isShift = false;
function key(input){
    let output = document.getElementById("write").textContent;
    if (isUpper) {
        output = output + String(input).toLocaleUpperCase();
        document.getElementById("write").innerHTML = output;
    }
    else if (isShift) {
        output = output + String(input).toLocaleUpperCase();
        document.getElementById("write").innerHTML = output;
        isShift = false;
    }
    else {
        output = output + input;
        document.getElementById("write").innerHTML = output;
    }
}
function del(){
    let output = document.getElementById("write").textContent;
    output = output.substring(0, output.length - 1);
    document.getElementById("write").innerHTML = output;
}
function upperCase(){
    isUpper = !isUpper;
    return isUpper;
}
function shift(){
    isShift = !isShift;
    return isShift;
}