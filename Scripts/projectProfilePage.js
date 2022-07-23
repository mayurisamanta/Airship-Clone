import { navbar1 , navbar2 } from "../Components/navbar.js";

document.querySelector("#navbar1").innerHTML=navbar1();
document.querySelector("#navbar2").innerHTML=navbar2();


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
import{myFunction,myFunction1} from "../Components/fetch.js";

document.querySelector("#quemark").addEventListener("click" , myFunction1);

document.querySelector("#profile").addEventListener("click" , myFunction);

let clientProjectData = JSON.parse(localStorage.getItem("projectData"));

console.log(clientProjectData);

let clientData = (data)=>{
    data.forEach((ele)=>{
        let div = document.createElement("div");
        div.setAttribute("class","cards");

        let img = document.createElement("img");
        img.src=ele.icon;
        img.setAttribute("class","default");

        let title = document.createElement("h2");
        title.innerText=ele.projectName;
        title.setAttribute("class","title");

        let type = document.createElement("p");
        type.innerText=ele.type;
        type.setAttribute("class","type , type1");
        // type.setAttribute("class","");
        let con = document.createElement("p");
        con.innerText="NOT CONFIGURED";
        con.setAttribute("class","type, type2");

        div.append(img,title,type,con);

        document.querySelector("#container").append(div);
    })
}

clientData(clientProjectData);

let byDefault = [
    {
        icon : "https://s3.amazonaws.com/com.urbanairship.appicons/YpFwh7-pT8yy-pgBt44YTQ/icon.PNG?1658472879.43763",
        pname : "1st Flight",
        type : "DEMO"
    },
    {
        icon : "https://s3.amazonaws.com/com.urbanairship.appicons/YpFwh7-pT8yy-pgBt44YTQ/icon.PNG?1658472879.43763",
        pname : "1st Flight",
        type : "DEMO"
    },
    {
        icon : "https://s3.amazonaws.com/com.urbanairship.appicons/YpFwh7-pT8yy-pgBt44YTQ/icon.PNG?1658472879.43763",
        pname : "1st Flight",
        type : "DEMO"
    }
]

let byDefaultDiv = ()=>{
    byDefault.forEach((ele)=>{
        let div = document.createElement("div");
        div.setAttribute("class","cards");

        let img = document.createElement("img");
        img.src=ele.icon;
        img.setAttribute("class","default");

        let title = document.createElement("h2");
        title.innerText=ele.pname;
        title.setAttribute("class","title");

        let type = document.createElement("p");
        type.innerText=ele.type;
        type.setAttribute("class","type ");
        type.setAttribute("id","type1");

        let con = document.createElement("p");
        con.innerText="NOT CONFIGURED";
        con.setAttribute("class","type, type2");

        div.append(img,title,type,con);

        document.querySelector("#container").append(div);

    })
}

byDefaultDiv();
