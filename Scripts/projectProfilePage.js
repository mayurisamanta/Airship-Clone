import { navbar1 , navbar2 } from "../Components/navbar.js";

document.querySelector("#navbar1").innerHTML=navbar1();
document.querySelector("#navbar2").innerHTML=navbar2();


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
import{myFunction,myFunction1} from "../Components/fetch.js";

document.querySelector("#quemark").addEventListener("click" , myFunction1);

document.querySelector("#profile").addEventListener("click" , myFunction);
