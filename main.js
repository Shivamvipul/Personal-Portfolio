console.log("JS Loaded");
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};
window.addEventListener('scroll', () => {
    document.querySelector('.header')
        .classList.toggle('sticky', window.scrollY > 100);
});


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    console.log("scrolling");

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        console.log(id);

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            let activeLink = document.querySelector(
                'header nav a[href*="' + id + '"]'
            );

            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
     navbar.classList.remove('active');
};
