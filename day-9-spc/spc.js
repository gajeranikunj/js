var user = 0;
var Ai = 0;
setscore(user,Ai);

function aiterm() {
    var aitarm = Math.floor(Math.random() * 3)
    if (aitarm == 0) {
        document.getElementById("ai").src = "./IMG/S1.jpg"
        return "stone";
    } else if (aitarm == 1) {
        document.getElementById("ai").src = "./IMG/P1.jpg"
        return "paper";
    } else {
        document.getElementById("ai").src = "./IMG/C1.jpg"
        return "scissors";
    }
}

function pl(url) {
    var ai = aiterm();
    document.getElementById("user").src = url.src;


    console.log("ai="+ai);
    console.log("user="+url.name);

    if (ai == url.name) {
        return;
    } else if ((ai == "stone" && url.name == "paper") ||
               (ai == "paper" && url.name == "scissors") ||
               (ai == "scissors" && url.name == "stone")) {
        user++;
    } else {
        Ai++;
    }
    setscore(user,Ai);
}

function setscore(user,Ai) {
    document.getElementById("user_s").innerHTML = `user score=${user}`;
    document.getElementById("AI-s").innerHTML = `Ai score=${Ai}`;
}



// var user = 0;
// var Ai = 0;
// setscore();

// function aiterm() {
//     var aitarm = Math.floor(Math.random() * 3);
//     if (aitarm == 0) {
//         document.getElementById("ai").src = "./IMG/S1.jpg";
//         return "stone";
//     } else if (aitarm == 1) {
//         document.getElementById("ai").src = "./IMG/P1.jpg";
//         return "paper";
//     } else {
//         document.getElementById("ai").src = "./IMG/C1.jpg";
//         return "scissors";
//     }
// }

// function pl(url) {
//     var ai = aiterm();
//     document.getElementById("user").src = url.src;

//     var userChoice = url.name.trim();
//     console.log("ai=" + ai);
//     console.log("user=" + userChoice);

//     if (ai === userChoice) {
//         return;
//     } else if ((ai === "stone" && userChoice === "paper") ||
//                (ai === "paper" && userChoice === "scissors") ||
//                (ai === "scissors" && userChoice === "stone")) {
//         user++;
//     } else {
//         Ai++;
//     }
//     setscore();
// }

// function setscore() {
//     document.getElementById("user_s").innerHTML = `user score=${user}`;
//     document.getElementById("AI-s").innerHTML = `Ai score=${Ai}`;
// }
