/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')


// Check if the page is being refreshed
const isRefreshed = sessionStorage.getItem('isRefreshed');

// If the page is refreshed, remove the 'show-menu' class
if (isRefreshed) {
  navMenu.classList.remove('show-menu');
}

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click' , linkAction))

// Set 'isRefreshed' to true when the page is refreshed
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('isRefreshed', true);
  });

/*=============== ADD TO BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')

}

window.addEventListener('scroll',blurHeader)


/*=============== TESTERMONIAL SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');

    window.scrollY >= 350
        ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__menu a');

const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach((current, index) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const navLink = navLinks[index];

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active-link');
        } else {
            navLink.classList.remove('active-link');
        }
    });
};

// Add this part to highlight the active link on initial load
document.addEventListener('DOMContentLoaded', scrollActive);
window.addEventListener('scroll', scrollActive);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    reset: true
})

sr.reveal(`.home__data, .explore__data, .explore__user, .footer__container`)
sr.reveal(`.home__card` , {delay: 600, distance: '100px' , interval: 100})
sr.reveal(`.about__data, .join__image` , {origin: 'right'})
sr.reveal(`.about__image, .join__data`, {origin: 'left'})
sr.reveal(`.popular__card `, {interval: 200})

