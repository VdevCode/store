const openMenu = document.querySelector('#menu')
const showMenu = document.querySelector('.nav-menu-content')

openMenu.addEventListener('click',function(){
    showMenu.classList.toggle('active')
    showCart.classList.remove('active')
    showLogin.classList.remove('active')
})

//darkmode
const openDarkmode = document.querySelector('#darkmode')
openDarkmode.addEventListener('click',function(){
    openDarkmode.classList.toggle('bxs-sun')
    if(openDarkmode.classList.contains('bxs-sun')){
        document.body.classList.toggle('active')
    }
    else{
        document.body.classList.remove('active')
    }
})

//open Cart
const openCart = document.querySelector('#opencart')
const showCart = document.querySelector('.cart')
const closeCart = document.querySelector('.cart__close')

openCart.addEventListener('click',function(){
    showCart.classList.toggle('active')
    showMenu.classList.remove('active')
    showLogin.classList.remove('active')
})

closeCart.addEventListener('click',function(){
    showCart.classList.remove('active')
})

//login
const openLogin = document.querySelector('#user')
const showLogin = document.querySelector('.login')
const loseLogin = document.querySelector(".login__close")

openLogin.addEventListener('click',function(){
    showLogin.classList.toggle('active')
    showMenu.classList.remove('active')
    showCart.classList.remove('active')
})
loseLogin.addEventListener('click',function(){
    showLogin.classList.remove('active')
})

//swiper
var swiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
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

//scroll header

// function scrollHeader(){
//     const header = document.querySelector('#header')
//     if(this.scrollY >= 50){
//         header.classList.add('scroll-header')
//     }else{
//         header.classList.remove('scroll-header')
//     }
// }


//swiper arrivals
var newswiper = new Swiper(".new-swiper", {
    slidesPerView: 1,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });


//change image
const image = document.querySelector('.changeImage')
const listImage = ['./image/product-1.png','./image/product-2.png','./image/discount.png','./image/product-3.png','./image/product-4.png','./image/product-5.png']

setInterval(function(){
    var randomImage = Math.floor(Math.random() *6)
    image.src = listImage[randomImage]
},4000)

//scroll Top

// function scrollUp(){
//     const scrollTop = document.querySelector('.scroll__top')
//     if(this.scrollY >= 350){
       
//         scrollTop.classList.toggle('active')
//     }else{
//         scrollTop.classList.remove('active')
//     }
// }

// window.addEventListener('scroll',scrollUp)