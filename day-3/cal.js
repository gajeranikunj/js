document.addEventListener("keydown", (event) => {
    var KeyID = event.keyCode;
    switch (KeyID) {
        case 8:
            var tamp = document.getElementById("enternum").value;
            tamp = tamp.slice(0, tamp.length - 1)
            document.getElementById("enternum").value = tamp
            break;
        case 46:
            document.getElementById("enternum").value = "";
            break;
        default:
            break;
    }
    data(event)
});

function data(e, sva) {


    if (e.key[0]=="F") {
      return;  
    } 
    var input;
    if (sva == undefined) {
        input = e.key;
    } else {
        input = sva;
    }
    var validInput = /^[0-9+\-*/.]*$/.test(input);
    if (!validInput) {
        input = input.replace(/[^0-9+\-*/.]/g, "");
    }

    document.getElementById("enternum").value += input;

    // -----------------------------------------------------------------------------------------------------
    var arr = document.getElementById("enternum").value;
    var copy = arr.split("");
    var subl = "";
    copy.forEach((sub) => {
        if (sub == "+" || sub == "-" || sub == "*" || sub == "/") {
            subl = subl + sub;
        }
    })
    subl = subl.split("")

    arr = arr.split(/[\s+\s-\s*\s/]+/);
    for (var tam in arr) {
        arr[tam] = arr[tam] * 1;
    }

    var ans = arr[0];
    for (let i = 1; i < arr.length; i++) {

        if (subl[i - 1] == "+") {
            ans = ans + arr[i];
        } else if (subl[i - 1] == "-") {
            ans = ans - arr[i];
        } else if (subl[i - 1] == "*") {
            if (arr[i] != 0) {
                ans = ans * arr[i];
            }
        } else if (subl[i - 1] == "/") {
            ans = ans / arr[i];
        }
    }
    document.getElementById("ans").value = ans;
}

