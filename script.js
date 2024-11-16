const btnElem = document.querySelector(".btn");
const inputElem = document.getElementById("username");
const greetingElem = document.getElementById("greeting");
const colorElem = document.getElementById("color");
const titleElem = document.querySelector(".title")

btnElem.addEventListener("click", function () {
    const username = inputElem.value.trim();
    console.log(username);
    const userColor = colorElem.value;
    console.log(userColor);

    greetingElem.style.color = userColor;
    
    greetingElem.innerHTML ="";
    
    titleElem.innerHTML = `vediamo se ora funzione ${username}`
});