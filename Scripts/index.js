function first(){
    document.getElementById("image_data").src="images/privacy.JPG"
}

function second(){
    document.getElementById("image_data").src="images/axaa.JPG"
}
function third(){
    document.getElementById("image_data").src="images/3.JPG"
}
function four(){
    document.getElementById("image_data").src="images/1.JPG"
}
setInterval(first,2000)
setInterval(second,4000)
setInterval(third,6000)
setInterval(four,8000)

var swiper = new Swiper(".mySwiper", {
slidesPerView: 1,
spaceBetween: 30,
slidesPerGroup: 1,
loop: true,
loopFillGroupWithBlank: true,
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
});

// import { navbar1 } from "../Components/navbar.js";

// document.querySelector("#navbar1").innerHTML=navbar1();