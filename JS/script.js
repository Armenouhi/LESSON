    /*
    *   Select-Box
    */
function myOption() {
    var obj = document.getElementById("selectBox");
    var heroes = obj.options[obj.selectedIndex].text;
    alert(heroes);
}

    /*
    *   Radio buttons
    */
function myRadio() {
    if (document.getElementById("male").checked == true) {
        alert(document.getElementById("male").value)
    }
    if (document.getElementById("female").checked == true) {
        alert(document.getElementById("female").value)
    }
}

    /*
    *   Check-Box
    */
function myBoxes() {
    if (document.getElementById("checkBox1").checked == true) {
        document.getElementById("demo1").style.display = "block";
    } else {
        document.getElementById("demo1").style.display = "none";
    }
    if (document.getElementById("checkBox2").checked == true) {
        document.getElementById("demo2").style.display = "block";
    } else {
        document.getElementById("demo2").style.display = "none";
    }
    if (document.getElementById("checkBox3").checked == true) {
        document.getElementById("demo3").style.display = "block";
    } else {
        document.getElementById("demo3").style.display = "none";
    }
}


    /*
    *   Input - P
    */
function myClick() {
    document.getElementById("text").style.display="block";
     document.getElementById("text").autofocus="true";
    document.getElementById("demo").style.display="none";
    document.getElementById("text").style.border="block";
    document.getElementById("text").value = document.getElementById("demo").innerText + "_ _ _ _ _ _";

}

function myInput() {
    if (event.keyCode === 13) {
        document.getElementById("text").style.display="none";
        document.getElementById("demo").innerText = document.getElementById("text").value;
        var p = document.getElementById("demo");
        p.style.marginLeft="45%";
        p.style.marginTop="4%";
        p.style.display="block";
    }
}