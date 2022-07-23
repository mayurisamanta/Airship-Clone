document.getElementById("logo").addEventListener("click",()=>{
    window.location.href = "index.html";
});

document.getElementById("add").addEventListener("click",(event)=>{
    event.preventDefault();
    let p = document.createElement("p");
    p.innerText = "Email added.";
    p.style.border = "1px solid #ffb700";
    p.style.padding = "5px";
    let div = document.getElementById("passerr");
    div.innerHTML = null;
    div.append(p);
    document.getElementById("email").value = null;
});

document.getElementById("submit").addEventListener("click",(event)=>{
    event.preventDefault();
    window.location.href = "login.html";
});

document.getElementById("skip").addEventListener("click",(event)=>{
    event.preventDefault();
    window.location.href = "login.html";
});