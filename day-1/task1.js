document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('inputbox').addEventListener("input", (e) => {
        var a = e.target.value;
        var copy = a;
        a = a.split('').reverse().join('');
        document.getElementById('rev').innerHTML =  a ? "reverse=" +a : "reverse=0";
        if (copy == a) {
            document.getElementById('ans').innerHTML = "palindrome ";
        } else {
            document.getElementById('ans').innerHTML = "not a palindrome "
        }
        // -------------------------------------------------------------------------------
        var num1 = copy;
        var ame = 0;
        for (let b = copy.length; b > 0; b--) {
            ame += Math.pow(num1 % 10, copy.length)
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
