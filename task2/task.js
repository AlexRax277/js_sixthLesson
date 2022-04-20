const menu = document.querySelector('.menu')
const menuLinks = Array.from(menu.getElementsByClassName('menu__link'))
let click_foo = event => {
    if (event.target.closest('.menu__item').querySelector('.menu_sub')) {
        if (event.target.closest('.menu__item').querySelector('.menu_sub').classList.contains('menu_active')) {
            event.target.closest('.menu__item').querySelector('.menu_sub').classList.remove('menu_active')
        } else if (event.target.classList.contains('menu__link')) {
            event.target.closest('.menu__item').querySelector('.menu_sub').classList.add('menu_active')
        }
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






