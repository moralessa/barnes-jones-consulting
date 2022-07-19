import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'
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