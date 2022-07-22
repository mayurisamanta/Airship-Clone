import {navbar1} from "../Components/navbar.js";

document.querySelector("#navbar1").innerHTML=navbar1();

import{myFunction,myFunction1} from "../Components/fetch.js";

document.querySelector("#quemark").addEventListener("click" , myFunction1);

document.querySelector("#profile").addEventListener("click" , myFunction);

let array = [];
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
    let type = document.querySelector("#select1").value;
    let industry = document.querySelector("#id_industry").value;

    let data = new Project(name,icon,type,industry);
    console.log(data);
    array.push(data);
    localStorage.setItem("projectData",JSON.stringify(array));
}
document.querySelector("#cp").addEventListener("click", storeData);
