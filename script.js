window.onscroll = function () {
    scrollFunction()
    getSelection()
}
// Navbar links highlight when in section
const sections = document.querySelectorAll('section[id]')
function getSelection() {
    let scrollY = window.scrollY

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 40
        const sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector('.navbar a[href*=' + sectionId + ']')
                .classList.add('active')
        } else {
            document
                .querySelector('.navbar a[href*=' + sectionId + ']')
                .classList.remove('active')
        }
    })
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
}

//Toggle navbar when clicking any menu button
const linksList = document.querySelectorAll('.link-item')
for (i = 0; i < linksList.length; i++) {
    linksList[i].addEventListener('click', function () {
        nav.classList.remove('nav_toggle')
    })
}
//Toggle navbar when clicking any logo button
document.querySelector('.logo').addEventListener('click', function () {
    nav.classList.remove('nav_toggle')
})
