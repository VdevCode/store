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
// var swiper = new Swiper(".new-swiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

//scroll header

// function scrollHeader(){
//     const header = document.querySelector('#header')
//     if(this.scrollY >= 50){
//         header.classList.add('scroll-header')
//     }else{
//         header.classList.remove('scroll-header')
//     }
// }


//swiper product
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

//open product and click slide image

const productItems = document.querySelectorAll('.product__img')
const totalProductItems = productItems.length
const lightbox = document.querySelector('.lightbox')
const lightboxImg = document.querySelector('.lightbox__img')
const lightboxClose = document.querySelector('.lightbox__close')
const lightboxCounter = document.querySelector('.caption__counter')

let itemIndex = 0
for(let i=0;i<totalProductItems;i++){
    productItems[i].addEventListener('click',function(){
       itemIndex = i
       changeItem()
       toggleLightbox()
      
    })
}

function nextItems(){
    if(itemIndex == totalProductItems -1){
        itemIndex = 0
    }
    else{
        itemIndex++
    }
    changeItem()
}

function prevItems(){
    if(itemIndex == 0){
       itemIndex=totalProductItems-1
    }
    else{
        itemIndex--
    }
    changeItem()
}


function toggleLightbox(){
   lightbox.classList.toggle('open')
}


function changeItem(){
    imgSrc = productItems[itemIndex].querySelector('.product__img img').getAttribute('src')
    lightboxImg.src = imgSrc
    lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalProductItems
}

lightboxClose.addEventListener('click',function(){
    lightbox.classList.remove('open')
})
