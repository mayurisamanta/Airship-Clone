document.getElementById("logo").addEventListener("click",()=>{
    window.location.href = "index.html";
});

let data = JSON.parse(localStorage.getItem("data")) || [];
document.getElementById("submit").addEventListener("click", (event)=>{
    event.preventDefault();
    let form = document.getElementById("form");
    let f = form.firstname.value;
    let l = form.lastname.value;
    let e = form.email.value;
    let c = form.company.value;

    for (let i = 0; i < data.length; i++){
        if (data[i].company == c){
            let p = document.createElement("p");
            p.innerText = "This company name is already taken. Please choose another.";
            p.style.border = "1px solid #ffb700";
            p.style.padding = "5px";
            let div = document.getElementById("companyerr");
            div.innerHTML = null;
            div.append(p);
            return;        
        }
    };
    let obj = {
        firstname : f,
        lastname : l,
        email : e,
        company : c,
    }
    window.location.href = "activate.html";
    localStorage.setItem("signup", JSON.stringify(obj));
});