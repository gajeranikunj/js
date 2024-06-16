var user = 0;
var Ai = 0;
setscore(user, Ai);

function aiterm() {
        var aitarm = Math.floor(Math.random() * 3)
        if (aitarm == 0) {
            document.getElementById("ai").src = "./IMG/S1.png"
            return "stone";
        } else if (aitarm == 1) {
            document.getElementById("ai").src = "./IMG/P1.png"
            return "paper";
        } else {
            document.getElementById("ai").src = "./IMG/C1.png"
            return "scissors";
        }
}

function pl(url) {
    shake()
    var ai = aiterm();
    document.getElementById("user").src = url.src;


    console.log("ai=" + ai);
    console.log("user=" + url.name);

    if (ai == url.name) {
        return;
    } else if ((ai == "stone" && url.name == "paper") ||
        (ai == "paper" && url.name == "scissors") ||
        (ai == "scissors" && url.name == "stone")) {
        user++;
    } else {
        Ai++;
    }
    setscore(user, Ai);
}

function setscore(user, Ai) {
    document.getElementById("user_s").innerHTML = `user score=${user}`;
    document.getElementById("AI-s").innerHTML = `Ai score=${Ai}`;
}

function shake() {
    document.getElementById("user").style.animationName = "sheak1"
    document.getElementById("ai").style.animationName = "sheak2"
}