document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('inputbox').addEventListener("input", (e) => {
        var a = e.target.value;
        var ans = 0;
        var copy = a;
        while (a != 0) {
            ans = (ans * 10) + (a % 10);
            a = parseInt(a / 10);
        }
        document.getElementById('rev').innerHTML = "reverse=" + ans;
        if (copy == ans) {
            document.getElementById('ans').innerHTML = "palindrome ";
        } else {
            document.getElementById('ans').innerHTML = "not a palindrome "
        }
        // -------------------------------------------------------------------------------
        var num1 = copy;
        var len = copy.length;
        var ame = 0;

        for (let b = len; b > 0; b--) {
            var d = 1;
            for (let c = len; c > 0; c--) {
                d = d * (num1 % 10);
            }
            ame = ame + d;
            num1 = parseInt(num1 / 10);
        }
        document.getElementById('ame').innerHTML = "armstrong num=" + ame;
        if (ame == copy) {
            document.getElementById('von').innerHTML = "it is armstrong";
        } else {
            document.getElementById('von').innerHTML = "it is not a armstrong";
        }
    });
});
