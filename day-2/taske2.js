document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('data').addEventListener("input", (e) => {
        var a = e.target.value;
        a = a[0].toUpperCase() + a.substring(1).toLowerCase();
        document.getElementById('res').innerHTML = (a);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('prime').addEventListener("input", (e) => {
        var a = e.target.value;
        var count = 0;
        if (a < 0) {
            return;
        }
        for (var b = a; b > 0; b--) {
            if (a % b == 0) {
                count++;
            }
            if (count > 2) {
                break;
            }
        }
        if (count == 2) {
            document.getElementById('ans').innerHTML = `${a} is prime number`;
        } else {
            document.getElementById('ans').innerHTML = `${a ? a : "0"} is not a prime number`;
        }
    });
});

