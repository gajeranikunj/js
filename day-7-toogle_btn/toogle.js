var toge = true;
document.getElementById("toogle_btn").addEventListener("click", () => {
    if (toge) {
        document.getElementById("trak").style.left = "57px"
        document.getElementById("toogle_btn").style.backgroundColor="#3b3bd9"
        toge = !toge;
    } else {
        toge = !toge;
        document.getElementById("trak").style.left = "7px"
        document.getElementById("toogle_btn").style.backgroundColor="gray"
    }
})