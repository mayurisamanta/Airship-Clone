document.getElementById("logo").addEventListener("click",()=>{
    window.location.href = "index.html";
});

let data = JSON.parse(localStorage.getItem("data"));
document.getElementById("submit").addEventListener("click", (event)=>{
    event.preventDefault();
    let e = document.getElementById("email").value;
    let p = document.getElementById("password").value;
    let flag = true;
    for (let i = 0; i < data.length; i++){
        if (data[i].email == e && data[i].password == p){
            
            let obj = {
                email : e,
                password : p
            }
            localStorage.setItem("login", JSON.stringify(obj));
            window.location.href = "createProjectForm.html";
            return;
        }
        if (flag) {
            let p = document.createElement("p");
            p.innerText = "The username and password combination is invalid.";
            p.style.border = "1px solid #ffb700";
            p.style.padding = "5px";
            let div = document.getElementById("companyerr");
            div.innerHTML = null;
            div.append(p);
        }
    };
});