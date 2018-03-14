// JavaScript source code
var p = document.getElementsByTagName("p");
var i;
function bold() {
    if (p[0].style.fontWeight == "bold") {
        for (i = 0; i < p.length; i++) {
            p[i].style.fontWeight = "normal";
        }
    }
    else {
        for (i = 0; i < p.length; i++) {
            p[i].style.fontWeight = "bold";
        }
    }
}
function italic() {
    if (p[0].style.fontStyle == "italic") {
        for (i = 0; i < p.length; i++) {
            p[i].style.fontStyle = "normal";
        }
    }
    else {
        for (i = 0; i < p.length; i++) {
            p[i].style.fontStyle = "italic";
        }
    }

}
function kleur() {
    var x = document.getElementById("kleurSelect").value;
    for (i = 0; i < p.length; i++) {
        p[i].style.color = x;
    }
}