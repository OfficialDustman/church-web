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


//for responsiveness
const responsive = window.matchMedia("(max-width: 765px)");
const projectSamples = document.querySelectorAll('.project-sample ');
const filteredElements = [...projectSamples].slice(3);  // get elements from index 3 until the end of the array
const filteredDuplicateElements = [...filteredElements
].slice(6);  // get elements from index 6 until the end of the array
const seeMore = document.querySelector('.see-events ');
const seeALl = document.querySelector('.all-events ');

// console.log(projectSamples);
console.log(filteredElements);
console.log(filteredDuplicateElements);


function listen(responsive) {

  if (responsive.matches) { 

    filteredElements.forEach((element, i) => {
      element.style.display = "none";
    });

    seeMore.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(seeMore.textContent);
      filteredDuplicateElements.forEach((element, i) => {
        element.classList.toggle('sub-active');
      });

      filteredElements.forEach((element, i) => {
        element.classList.toggle('active');
      });

      seeALl.classList.toggle('active');

      if (seeMore.textContent === "See More") {
        seeMore.textContent = "See Less"; 
      } else {
        seeMore.textContent = "See More"; 
      }
            
    });

  } else {
    filteredElements.forEach(element => {
      element.style.display = "flex";
    });
  }
}

listen(responsive)
responsive.addListener(listen)


