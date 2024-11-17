const menuElem = document.querySelector(".hamburger-menu");
const menuBtn = document.getElementById("hamburger-btn");
console.log(menuBtn);
const menuBtnClose = document.querySelector(".close");

menuBtn.addEventListener("click", function() {
    menuElem.classList.add("active")
})

menuBtnClose.addEventListener("click", function(){
    menuElem.classList.remove("active");
})