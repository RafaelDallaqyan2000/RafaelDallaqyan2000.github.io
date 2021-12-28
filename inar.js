let div = document.getElementById("div");
let div2 = document.getElementById("div2");
let red = document.getElementById("red");
let body = document.getElementById("body")
red.addEventListener("click", ()=>{
    div.style.backgroundColor = "red";
    div2.style.backgroundColor = "red";
 
})
let green = document.getElementById("green");
green.addEventListener("click", ()=>{
    div.style.backgroundColor = "green";
    div2.style.backgroundColor = "green";
})
const input = document.getElementById("input1");
const pe = document.getElementById("p");

input.addEventListener("keyup", ()=>{
    pe.innerText = input.value
});




let bold = document.getElementById("B");
let italic = document.getElementById("i");
const del = document.getElementById("del");
const u = document.getElementById("u");
const ABC = document.getElementById("Abc");

ABC.addEventListener("click", ()=>{
    pe.style.textTransform = "uppercase"
})
u.addEventListener("click", ()=>{
    pe.style.textDecoration = "underline"
})
bold.addEventListener("click", () => {
    pe.style.fontWeight = "bold"
})
italic.addEventListener("click", () => {
    pe.style.fontStyle = "italic"
})
del.addEventListener("click", ()=>{
    pe.style.textDecoration = "none";
    pe.style.fontStyle = "normal";
    pe.style.fontWeight = "normal";
    pe.style.textTransform = "none"
})



   
 