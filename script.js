const navLogo = document.querySelector(".logo");
navLogo.addEventListener("click", printToConsole);

function printToConsole() {
    console.log();
}

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    let nav = document.getElementById("navbar");
    if (
        document.body.scrollTop > 64 ||
        document.documentElement.scrollTop > 64
    ) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
}

const navButton = document.querySelector(".menu-button");
navButton.addEventListener("click", toggleMenu);
let nav = document.getElementById("navbar");

function toggleMenu() {
    nav.classList.toggle("nav_toggle");
    console.log("toggle menu");
}
