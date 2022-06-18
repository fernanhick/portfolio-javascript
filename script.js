const navLogo = document.querySelector('.logo')
navLogo.addEventListener('click', printToConsole)

function printToConsole() {
    console.log()
}

window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
    let nav = document.getElementById('navbar')
    if (
        document.body.scrollTop > 64 ||
        document.documentElement.scrollTop > 64
    ) {
        nav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled')
    }
}

const navButton = document.querySelector('.menu-button')
navButton.addEventListener('click', toggleMenu)
let nav = document.getElementById('navbar')

function toggleMenu() {
    nav.classList.toggle('nav_toggle')
    console.log('toggle menu')
}

//Toggle navbar when clicking any menu button
linksList = document.querySelectorAll('.link-item')
for (i = 0; i < linksList.length; i++) {
    linksList[i].addEventListener('click', function () {
        nav.classList.remove('nav_toggle')
    })
}
//Toggle navbar when clicking any logo button
document.querySelector('.logo').addEventListener('click', function () {
    nav.classList.remove('nav_toggle')
})
data.title
