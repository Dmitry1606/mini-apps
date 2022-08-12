let openButton = document.querySelector(".open");
let main = document.querySelector(".main");
let closeButton = document.querySelector(".close");
let aside = document.querySelector("aside");

openButton.addEventListener('click', function (event) {
    aside.style.width = '250px'
})

closeButton.addEventListener('click', function (event) {
    aside.style.width = '0px'
})