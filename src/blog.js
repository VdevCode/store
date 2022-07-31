const openMenu = document.querySelector('#menu')
const showMenu = document.querySelector('.nav-menu-content')

openMenu.addEventListener('click', function () {
    showMenu.classList.toggle('active')
    showCart.classList.remove('active')
    showLogin.classList.remove('active')
})

//darkmode
const openDarkmode = document.querySelector('#darkmode')
openDarkmode.addEventListener('click', function () {
    openDarkmode.classList.toggle('bxs-sun')
    if (openDarkmode.classList.contains('bxs-sun')) {
        document.body.classList.toggle('active')
    }
    else {
        document.body.classList.remove('active')
    }
})

//open Cart
const openCart = document.querySelector('#opencart')
const showCart = document.querySelector('.cart')
const closeCart = document.querySelector('.cart__close')

openCart.addEventListener('click', function () {
    showCart.classList.toggle('active')
    showMenu.classList.remove('active')
    showLogin.classList.remove('active')
})

closeCart.addEventListener('click', function () {
    showCart.classList.remove('active')
})

//login
const openLogin = document.querySelector('#user')
const showLogin = document.querySelector('.login')
const loseLogin = document.querySelector(".login__close")

openLogin.addEventListener('click', function () {
    showLogin.classList.toggle('active')
    showMenu.classList.remove('active')
    showCart.classList.remove('active')
})
loseLogin.addEventListener('click', function () {
    showLogin.classList.remove('active')
})

//timeday

function displayTimer() {
    var datetime = new Date()
    var hours = datetime.getHours()
    var minutes = datetime.getMinutes()
    var seconds = datetime.getSeconds()
    var sessions = document.getElementById('session')

    document.getElementById('hours').innerHTML = hours + "giờ"
    document.getElementById('minutes').innerHTML = minutes + "phút"
    document.getElementById('seconds').innerHTML = seconds + "giây"

    if (hours >= 12 && hours < 16) {
        sessions.innerHTML = "Trưa"
    } else if (hours >= 16 && hours < 18) {
        sessions.innerHTML = "Chiều"
    }
    else if (hours >= 18 && hours < 24) {
        sessions.innerHTML = "Tối"
    }
    else {
        seconds.innerHTML = "Sáng"
    }

}

setInterval(displayTimer, 1000)


function scrollUp() {
    const scrollTop = document.querySelector('.scroll__top')
    if (this.scrollY >= 350) {

        scrollTop.classList.toggle('active')
    } else {
        scrollTop.classList.remove('active')
    }
}

window.addEventListener('scroll', scrollUp)

//liked blogs
const likeBtn = document.querySelectorAll('.like__more-view')
let iconLike = document.querySelector('#liked__view')
let countLike = document.querySelector('.counter__like-view')

let clicked = false


// likeBtn.addEventListener('click', () => {
//         if (!clicked) {
//             clicked = true
//             iconLike.innerHTML = `<i class='bx bxs-like' id="liked__view"></i>`
//             countLike.textContent++
//         }
//         else {
//             clicked = false
//             iconLike.innerHTML = `<i class='bx bx-like' id="liked__view"></i>`
//             countLike.textContent--
//         }
//     })

likeBtn.forEach(function(like){
    like.addEventListener('click',function(){
        
        if(like.classList.contains('bx-like')[0]){
            clicked = true
            iconLike.innerHTML = `<i class='bx bxs-like' id="liked__view"></i>`
            countLike.textContent++
        }else{
            clicked = false
            iconLike.innerHTML = `<i class='bx bx-like' id="liked__view"></i>`
            countLike.textContent--
        }
    })
})
