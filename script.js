const navBar = document.querySelector('.fa-bars'),
      overlayEl = document.querySelector('.overlay'),
      closeBtn= document.querySelector('.fa-close'),
      navMenu = document.querySelector('ul'),
      header = document.querySelector('header'),
      headerLinks = document.querySelectorAll('ul a');

// console.log(headerLinks);


navBar.onclick = function() {
    navMenu.classList.toggle('active')
    navBar.classList.toggle('fa-close')
}

// window.onscroll = function() {
//     navMenu.classList.remove('active')
//     navBar.classList.remove('fa-close')
// }

scrollTrigger = 60;

window.onscroll = function() {

  navMenu.classList.remove('active')
  navBar.classList.remove('fa-close')

  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
      header.classList.add('scroll')

      headerLinks.forEach((link) => {
        link.classList.add('scroll')
      });
  } else {
      header.classList.remove('scroll')

      headerLinks.forEach((link) => {
        link.classList.remove('scroll')
      });
  }
}

var swiper = new Swiper("#home", {
    loop: true,
    spaceBetween: 30,
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper("#events", {
  loop: true,
  slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
});


var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
