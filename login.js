document.getElementById("logo").addEventListener("click",()=>{
    window.location.href = "index.html";
});

let data = JSON.parse(localStorage.getItem("data"));
document.getElementById("submit").addEventListener("click", (event)=>{
    event.preventDefault();
    let form = document.getElementById("formdiv");
    let e = form.email.value;
    let p = form.password.value;

    for (let i = 0; i < data.length; i++){
        if (data[i].email == e && data[i].password == p){
            let p = document.createElement("p");
            p.innerText = "This company name is already taken. Please choose another.";
            p.style.border = "1px solid #ffb700";
            p.style.padding = "5px";
            document.getElementById("companyerr").append(p);
            return;        
        }
    };
    let obj = {
        firstname : f,
        lastname : l,
        email : e,
        company : c,
    }
    data.push(obj);
    localStorage.setItem("data", JSON.stringify(data));
});