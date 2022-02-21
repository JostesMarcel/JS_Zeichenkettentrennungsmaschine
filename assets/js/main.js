let frontOut = document.getElementById("frontOut")
let backOut = document.getElementById("backOut")
let txt1 = document.getElementById("text1")
let txt2 = document.getElementById("text2")
let radio1 = document.getElementById("radio1")
let trennen = function(){
    //console.log(txt1.value);
    frontOut.innerHTML = " ";
    backOut.innerHTML = " ";
    let position = txt1.value.indexOf(txt2.value)
    console.log(position);
    if (position === -1) {
        frontOut.innerHTML = "Wort nicht in der Zeichenkette enthalten!".fontcolor("red")
    } else {
        if (radio1.checked) {
            frontOut.innerHTML = txt1.value.slice(0, position).fontcolor("darkgreen")
            backOut.innerHTML = txt1.value.slice(position).fontcolor("darkgreen")
            //console.log("checked");
    } else {
        frontOut.innerHTML = txt1.value.slice(0, position + txt2.value.length).fontcolor("darkgreen")
        backOut.innerHTML = txt1.value.slice(position + txt2.value.length).fontcolor("darkgreen")
        //console.log(txt1.value.slice(position + txt2.value.length));
    }
}
}