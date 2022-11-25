const navBar = document.querySelector('.fa-bars'),
      overlayEl = document.querySelector('.overlay'),
      closeBtn= document.querySelector('.fa-close'),
      navMenu = document.querySelector('ul'),
      header = document.querySelector('header'),
      headerLinks = document.querySelectorAll('ul a');

console.log(headerLinks);


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