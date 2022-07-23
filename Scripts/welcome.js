document.getElementById("logo").addEventListener("click",()=>{
    window.location.href = "index.html";
});

let data = JSON.parse(localStorage.getItem("data")) || [];

let obj = JSON.parse(localStorage.getItem("signup"));


document.getElementById("submit").addEventListener("click" , (event)=>{
    event.preventDefault();
    let password = document.getElementById("password1").value;
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (re.test(password)){
        let password2 = document.getElementById("password2").value;
        if (password == password2){
            obj.password = password;
            data.push(obj);
            console.log(data);
            localStorage.setItem("data", JSON.stringify(data));
            window.location.href = "setup.html";
        }
        else{
            let p = document.createElement("p");
            p.innerText = "Passwords does not match.";
            p.style.border = "1px solid #ffb700";
            p.style.padding = "5px";
            let div = document.getElementById("passerr");
            div.innerHTML = null;
            div.append(p);
        }
    }
    else {
        let p = document.createElement("p");
        p.innerText = "Passwords must be atleast 8 characters, including one number and one special character.";
        p.style.border = "1px solid #ffb700";
        p.style.padding = "5px";
        let div = document.getElementById("passerr");
        div.innerHTML = null;
        div.append(p);
    }
});