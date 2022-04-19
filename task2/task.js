const menu = document.querySelector('.menu')
const menuLinks = Array.from(menu.getElementsByClassName('menu__link'))
let click_foo = event => {
    if (event.target.classList.contains('menu__link') && event.target.closest('.menu__item').querySelector('.menu_sub')) {
        event.target.classList.toggle('menu_active')
        event.target.closest('.menu__item').querySelector('.menu_sub').style.display = 'block'
    }
}


menuLinks.forEach(el => {
    if (el.closest('.menu__item').querySelector('.menu_sub')) {
        el.onclick = () => {return false}
    }
})
menuLinks.forEach(element => {
        element.addEventListener('click', click_foo)
})






