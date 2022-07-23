document.getElementById("logo").addEventListener("click",()=>{
    window.location.href = "index.html";
});

let data = JSON.parse(localStorage.getItem("data")) || [];

let obj = JSON.parse(localStorage.getItem("signup"));
console.log(obj);

document.getElementById("submit").addEventListener("click" , (event)=>{
    event.preventDefault()
});