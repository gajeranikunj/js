var main = document.getElementById("mainbox");

function cluer() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`box-${i}`).innerHTML = "";
    }
}

function genrate() {
    cluer()
    var arr = [];
    while (arr.length != 9) {
        var r = Math.floor(Math.random() * 9 + 1);
        if (!(arr.includes(r))) {
            arr.push(r)
        }
    }
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] != 9) {
            document.getElementById(`box-${index + 1}`).innerHTML = arr[index];
        }
    }
    color()
}


function tarme(item) {
    if (item.innerHTML != "") {
        if (document.getElementById("box-9").innerHTML == "") {
            if (item.id == "box-8" || item.id == "box-6") {
                swip(item.id, "box-9");
            }
        } else
            if (document.getElementById("box-8").innerHTML == "") {
                if (item.id == "box-5" || item.id == "box-7" || item.id == "box-9") {
                    swip(item.id, "box-8");
                }
            } else
                if (document.getElementById("box-7").innerHTML == "") {
                    if (item.id == "box-4" || item.id == "box-8") {
                        swip(item.id, "box-7");
                    }
                } else
                    if (document.getElementById("box-6").innerHTML == "") {
                        if (item.id == "box-9" || item.id == "box-5" || item.id == "box-3") {
                            swip(item.id, "box-6");
                        }
                    } else
                        if (document.getElementById("box-5").innerHTML == "") {
                            if (item.id == "box-2" || item.id == "box-4" || item.id == "box-6" || item.id == "box-8") {
                                swip(item.id, "box-5");
                            }
                        } else
                            if (document.getElementById("box-4").innerHTML == "") {
                                if (item.id == "box-1" || item.id == "box-5" || item.id == "box-7") {
                                    swip(item.id, "box-4");
                                }
                            } else
                                if (document.getElementById("box-3").innerHTML == "") {
                                    if (item.id == "box-2" || item.id == "box-6") {
                                        swip(item.id, "box-3");
                                    }
                                } else
                                    if (document.getElementById("box-2").innerHTML == "") {
                                        if (item.id == "box-1" || item.id == "box-5" || item.id == "box-3") {
                                            swip(item.id, "box-2");
                                        }
                                    } else
                                        if (document.getElementById("box-1").innerHTML == "") {
                                            if (item.id == "box-2" || item.id == "box-4") {
                                                swip(item.id, "box-1");
                                            }
                                        }
    }
    chakewin()
    color()
}



function swip(item1, item2) {
    var a = document.getElementById(item1).innerHTML;
    var b = document.getElementById(item2).innerHTML;
    document.getElementById(item1).innerHTML = b;
    document.getElementById(item2).innerHTML = a;
}

function chakewin() {
    var count = 0;
    for (let index = 1; index <= 9; index++) {
        if (document.getElementById("box-" + index).innerHTML == index) {
            count++;
        }
    }
    if (count == 8) {
        alert("you win")
    }
}

function color() {
    for (let index = 1; index <= 9; index++) {
        if (document.getElementById("box-" + index).innerHTML == "") {
            document.getElementById("box-" + index).style.backgroundColor = "white"
        } else {
            document.getElementById("box-" + index).style.backgroundColor = "#D2B48C"
        }
    }
}