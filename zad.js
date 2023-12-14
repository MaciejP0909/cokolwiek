const test= document.getElementById("tes")
test.append("test")
let p = document.createElement("p")
test.appendChild(p)
p.append("testsadasdasd")
let b = document.body.appendChild(document.createElement("div"))
let a = document.createElement("h1")
b.appendChild(a)
a.append("hajedynka")

b.removeChild(a)

let naz = document.getElementById("nazwa")
let par = document.getElementById("pe1")
naz.removeChild(par)
let par2 = document.createElement("p")
naz.appendChild(par2)
par2.append("4")

let haha = document.getElementsByClassName("xd")[0]
console.log(haha)
let atryBUT = haha.getAttribute("id")
let but2 = haha.getAttribute("maciek")
console.log(atryBUT, but2)
haha.remove()
let zmn = document.querySelector("#maciek2")
zmn.remove()
let hehe = document.querySelectorAll(".xd")[1]
console.log(hehe)



    const btn = document.querySelector(".button");
    btn.addEventListener("click", function(){
        console.log("clicked button")
    })

