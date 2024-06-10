var togal = true;
var btn=document.getElementById("btn");
function on_off() {
    if (togal) {
        togal = !togal
        document.querySelector('img').src = "https://images.freeimages.com/images/large-previews/07c/light-bulb-2-1427493.jpg?fmt=webp&w=500";
        btn.innerHTML="off"
    } else {
        togal = !togal
        document.querySelector('img').src = "https://images.freeimages.com/images/large-previews/70a/light-bulb-1-1427502.jpg?fmt=webp&w=500";
        btn.innerHTML="on"  
    }
}