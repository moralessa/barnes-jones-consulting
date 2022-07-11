import expandMobileNav from './modules/nav.js';

const hambugerMenu = document.querySelector('.open-menu');
const menu = document.querySelector('.menu');
hambugerMenu.addEventListener('click', expandMobileNav);

window.addEventListener('resize', ()=>{
    if(window.matchMedia("min-width: 992px")){
        menu.style.display = 'block';
    }
})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });