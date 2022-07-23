import {navbar1} from "../Components/navbar.js";

document.querySelector("#navbar1").innerHTML=navbar1();

import{myFunction,myFunction1} from "../Components/fetch.js";

document.querySelector("#quemark").addEventListener("click" , myFunction1);

document.querySelector("#profile").addEventListener("click" , myFunction);

let array = JSON.parse(localStorage.getItem("projectData")) || [];
class Project{
    constructor(name,file,type,industry){
        this.projectName = name,
        this.icon = file,
        this.type = type,
        this.industry = industry
    }

}
let storeData = (event)=>{
    event.preventDefault;
    //console.log("FormData");
    let name = document.querySelector("#projectName").value;
    let icon = document.querySelector("#id_icon").value;
    console.log(icon);
    if(icon == "C:\\fakepath\\circle.png"){
        icon = './images/circle.png'
    }else if(icon == "C:\\fakepath\\hexa.png"){
        icon = './images/hexa.png'
    }else if(icon == "C:\\fakepath\\spinning-letter-s-logo.jpg"){
        icon = './images/spinning-letter-s-logo.jpg';
    }else if(icon == "C:\\fakepath\\platform.jpg"){
        icon = './images/platform.jpg'
    }else if(icon == "C:\\fakepath\\dinoco.jpeg"){
        icon = './images/dinoco.jpeg'
    }
    let type = document.querySelector("#select1").value;
    let industry = document.querySelector("#id_industry").value;

    let data = new Project(name,icon,type,industry);
    console.log(data);
    array.push(data);
    localStorage.setItem("projectData",JSON.stringify(array));
    window.location.href="../projectProfilePage.html";
}
document.querySelector("#cp").addEventListener("click", storeData);

