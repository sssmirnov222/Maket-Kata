let link = document.querySelectorAll(".main .main__link a");
let link_index = document.querySelectorAll(".main .main__link a");
let counter = 0;


link_index.forEach(el => {
  el.addEventListener("click", () => { 
       link_index.forEach(e => {
         console.log(e)
         e.classList.remove("active")
       })
     el.classList.add("active")
     
      
    
  })
})


let modal = document.querySelector('.header__modal');
let burger = document.querySelector('.wrapper .header .header__left .header-burger__left img')
let exit = document.querySelector('.header__modal .header-head__modal .exit')
let CPS = document.querySelector('.wrapper .main .main__description img')
let text = document.querySelector('.wrapper .main .text');
let body = document.body;
let main = document.querySelector('.main');
let header = document.querySelector('.header');

console.log(text)


burger.addEventListener('click', () => {
   counter+=1;
   if(counter === 1) {
    modal.style.display = "block";
    main.style.opacity = "0.2";
    header.style.opacity = "0.2";
    body.style.overflowY = "hidden";
   } 

   exit.addEventListener('click', () => {
    counter = 0;
    if(counter === 0) {
    modal.style.display = "none";
    main.style.opacity = "1";
    header.style.opacity = "1";
    body.style.overflowY = "auto";
     }
   
   })
   
})

console.log(CPS)



let down = document.querySelector('.main__servicbrands .down');
let up = document.querySelector('.main__servicbrands .up');
let lenovo = document.querySelector('.main__servicbrands .main-devices .lenovo_two');
let samsung = document.querySelector('.main__servicbrands .main-devices .Samsung_two');
let apple = document.querySelector('.main__servicbrands .main-devices .Apple_two');

down.addEventListener("click", () => {
  counter+=1;
  if(counter === 1) {
   lenovo.style.display = "inline-block";
    samsung.style.display = "inline-block";
    apple.style.display = "inline-block";
    up.style.display = "flex"
    down.style.display = "none";
   }   
})

up.addEventListener("click", () => {
  counter = 0;
  if(counter === 0) {

 lenovo.style.display = "none";
    samsung.style.display = "none";
    apple.style.display = "none";
    up.style.display = "none"
    down.style.display = "flex";
   } 
})


//слайдер
let swiper = new Swiper('.swiper-container', {
  //  slidesPerView: 3,

  //  pagination: {
  //   el: '.swiper-pagination',
  //   type: 'bullets',
  // },

  pagination: {
    el: '.pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="dot swiper-pagination-bullet">${index}</span>`;
    },
  },
  breakpoints: {

    0: {
      slidesPerView:1,
      spaceBetween: 10
    },
    320: {
      slidesPerView:1,
      spaceBetween: 16
    },

    430: {
      slidesPerView:2,
      spaceBetween: 16
    },

    600: {
      slidesPerView:3,
      spaceBetween: 16
    },
    
  }
});


