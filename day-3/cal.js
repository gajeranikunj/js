document.addEventListener("keypress", (e) => {
    console.log("Key pressed:", e.key);

    var input = e.key;
    var validInput = /^[0-9+\-*/]*$/.test(input);
    if (!validInput) {
        input = input.replace(/[^0-9+\-*/]/g, "");
    }

    document.getElementById("enternum").value += input;
});



document.getElementById("enternum").addEventListener("input", (e) => {

    // Remove invalid characters
    var input = e.target.value;
    var validInput = /^[0-9+\-*/]*$/.test(input);
    if (!validInput) {
        input = e.target.value = input.replace(/[^0-9+\-*/]/g, "");
    }
    // -----------------------------------------------------------------------------------------------------
    var arr = e.target.value;
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
})

