document.getElementById("logo").addEventListener("click",()=>{
    window.location.href = "index.html";
});

document.getElementById("submit").addEventListener("click", (event)=>{
    event.preventDefault();
    window.location.href = "invite.html";
});