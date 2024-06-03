var data = [
    { name: "rame", bor: 1992 },
    { name: "same", bor: 1996 },
    { name: "kame", bor: 1997 },
    { name: "nikunj", bor: 2005 },
    { name: "meet", bor: 1986 },
]

var input = document.getElementById("input");
input.addEventListener("input", (e) => {
    var born = 0;
    born = data.find((i) => i.name === e.target.value);

    var nowlist = data.filter((item) => true == item.name.includes(e.target.value))
    console.log(nowlist);
    document.getElementById("listofname").innerHTML=nowlist.map((item)=>{
        console.log(item.name);
        return `<div>${item.name}</div>`
    }).join('');


    document.getElementById("list").innerHTML = born ? "data of birth =" + born.bor : "name not found"
})