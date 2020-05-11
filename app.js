const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link')


window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav')
    } else {
        navbar.classList.remove('fixed-nav')
    }

    if (scrollHeight > 50) {
        topLink.classList.add('show-link')
    } else {
        topLink.classList.remove('show-link')
    }
})