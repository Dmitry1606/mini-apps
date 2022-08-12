let openButton = document.querySelector(".open");
let header = document.querySelector(".header");
let closeButton = document.querySelector(".close");
let menu = document.querySelector(".menu");
let form = document.querySelector("form");
let input = document.querySelector("input")

openButton.addEventListener('click', function (event) {
    menu.style.display = 'block';
    openButton.style.display = 'none';
})

closeButton.addEventListener('click', function (event) {
    menu.style.display = 'none';
    openButton.style.display = 'block';
})

input.addEventListener("focusin", function (event) {
    form.classList.add('focused')
});
input.addEventListener("focusout", function (event) {
    form.classList.remove('focused')
});