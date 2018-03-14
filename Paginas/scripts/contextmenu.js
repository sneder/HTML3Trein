// JavaScript source code
var p = document.getElementsByTagName("p");
var i;
function bold() {
    if (document.getElementById("text").style.fontWeight == "bold") {
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
    if (document.getElementById("text").style.fontStyle == "italic") {
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
    var x = document.getElementById("kleurselect").value;
    for (i = 0; i < p.length; i++) {
        p[i].style.color = x;
    }
}
