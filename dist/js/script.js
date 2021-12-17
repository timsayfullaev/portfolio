const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    menuClose = document.querySelector('.menu__close'),
    overlay = document.querySelector('.menu__overlay'),
    menuLink = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('menu_active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('menu_active');
});

menuLink.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('menu_active');
    });
});

const counters = document.querySelectorAll('.skills__percentages-percent'),
    lines = document.querySelectorAll('.skills__percentages-progress');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});