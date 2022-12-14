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


//card payment
const numberInput = document.querySelector('.card-number-input')
numberInput.addEventListener('input',function(){
        const cardChangeNumber = document.querySelector('.card__number-box')
        cardChangeNumber.innerText = numberInput.value
       
})

const holderInput = document.querySelector('.card-holder-input')
holderInput.addEventListener('input',function(){
        const cardChangeHolder = document.querySelector('.card__holder-name')
        cardChangeHolder.innerText = holderInput.value
})

const monthInput = document.querySelector('.month-input')
monthInput.addEventListener('input',function(){
        const cardChangeMonth = document.querySelector('.exp-month')
        cardChangeMonth.innerText = monthInput.value
})

const yearInput = document.querySelector('.year-input')
yearInput.addEventListener('input',function(){
        const cardChangeYear = document.querySelector('.exp-year')
        cardChangeYear.innerText = yearInput.value
})

