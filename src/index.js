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

function scrollUp(){
    const scrollTop = document.querySelector('.scroll__top')
    if(this.scrollY >= 350 ){
       
        scrollTop.classList.toggle('active')
    }else{
        scrollTop.classList.remove('active')
    }
}

scrollUp();

window.addEventListener('scroll',scrollUp)

//cart working js
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
}
else{
  ready()
}


function ready(){
    var removeCartButtons = document.getElementsByClassName('cart__amout-trash')
    for(var i = 0;i<removeCartButtons.length;i++){
        var buttonRemove = removeCartButtons[i];
        buttonRemove.addEventListener('click',removeCartItems)
    }
    var addCart = document.getElementsByClassName('btn__cart')
    for (var i =0;i <addCart.length;i++){
        var buttonCart = addCart[i]
        buttonCart.addEventListener('click',addCartClicked)
    }
}

function removeCartItems(e){
    var buttonClicked = e.target
    buttonClicked.parentElement.remove();

}


function addCartClicked(e){
    var button = e.target
    var shopProduct = button.parentElement
    var title = shopProduct.getElementsByClassName('new__title')[0].innerText;
    var price = shopProduct.getElementsByClassName('new__price')[0].innerText;
    var productImage = shopProduct.getElementsByClassName('image__product')[0].src;
    
    
    addProductToCart(title,price,productImage)

}

function addProductToCart(title,price,productImage){
  var cartShopBox = document.createElement('div')
  cartShopBox.classList.add('.cart__card')

  var cartItems = document.getElementsByClassName('cart__container')[0]
  var cartItemsName = cartItems.getElementsByClassName('cart__title')
  for (var i =0;i<cartItemsName.length;i++){
    if(cartItemsName[i].innerText ==title){
     
    }
    return
  
}


var cartBoxContent = `

              <div class="cart-box">
              <img src="${productImage}" alt="">
              </div>
              <div class="cart__details">
              <h3 class="cart__title">${title}</h3>
              <span class="cart__price">${price}</span>

              <div class="cart__amout">
                  <div class="cart__amout-content">
                      <span class="cart__amout-box">
                          <i class="bx bx-minus"></i>
                      </span>
                      
                      <span class="cart__amout-number">1</span>
                      
                      <span class="cart__amout-box">
                          <i class="bx bx-plus"></i>
                      </span>

                    
                  </div>
              </div>
              </div>
              <i class="bx bx-trash-alt cart__amout-trash"></i>

`

cartShopBox.innerHTML = cartBoxContent
cartItems.append(cartShopBox)
cartShopBox.getElementsByClassName('cart__amout-trash',ready)
}

//load more
const loadmore = document.querySelector('.load__more-btn');
    let currentItems = 2;
    loadmore.addEventListener('click', (e) => {
        const elementList = [...document.querySelectorAll('.all__product-shop .new')];
        for (let i = currentItems; i < currentItems + 2; i++) {
            if (elementList[i]) {
                elementList[i].style.display = 'block';
            }
        }
        currentItems += 2;

        // Load more button will be hidden after list fully loaded
          if (currentItems >= elementList.length) {
             loadmore.style.display = 'none'
              // loadmore.innerText ='Full'
            //   for (let i = currentItems; i < currentItems - 2; --i) {
            //     if (elementList[i]) {
            //         elementList[i].style.display = 'none';
            //     }
            // }
          }
        })
