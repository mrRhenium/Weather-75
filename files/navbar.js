const slider = document.querySelector(".slider");
const nav_bar = document.querySelector(".nav_bar");
const rotater = document.querySelector(".rotater");

const webname_container = document.querySelector(".webname_container");
const navbar_btn_container = document.querySelector(".navbar_btn_container");



slider.addEventListener("click",()=>{
    nav_bar.classList.toggle("nav_bar_class");
    webname_container.classList.toggle("webname_container_class");
    navbar_btn_container.classList.toggle("navbar_btn_container_class");
    rotater.classList.toggle("rotaterdown");

})