import common from "./common.js";

export default function header() {
    let { changeClassItemArray, changeClass } = common();

    // menu
    const humburger = document.querySelector('.header__humburger'),
        menu = document.querySelector('.menu'),
        overlay = document.querySelector('.menu__overlay');

    humburger.addEventListener('click', () => {
        changeClass(humburger, 'header__humburger_active', 'toggle')
        changeClass(menu, 'menu_active', 'toggle')
    })

    document.addEventListener('click', event => {
        if (event.target === overlay) {
            changeClass(menu, 'menu_active', 'toggle')
            changeClass(humburger, 'header__humburger_active', 'remove')
        }
    })

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 992) {
            changeClass(menu, 'menu_active', 'remove')
            changeClass(humburger, 'header__humburger_active', 'remove')
        }
    });

    //navigation
    const navMenu = document.querySelectorAll('.navigation'),
        navLink = document.querySelectorAll('.navigation__item-link');

    changeClassItemArray(navLink, 'navigation__item-link_active', 'remove')

    navMenu.forEach(menu => {
        menu.addEventListener('click', event => {
            if (event.target.tagName === 'A') {
                event.preventDefault()

                changeClassItemArray(navLink, 'navigation__item-link_active', 'remove')
                changeClass(event.target, 'navigation__item-link_active', 'add')
            }
        })
    });

    //theme

    const logo = document.querySelector('.header__logo-link'),
        headerRow = document.querySelector('.header'),
        ctas = document.querySelectorAll('.ctas');

    logo.addEventListener('click', (event) => {
        event.preventDefault();

        changeClass(headerRow, 'header_bg-light-blue', 'toggle')
        changeClassItemArray(navMenu, 'navigation_light', 'toggle')
        changeClassItemArray(ctas, 'ctas_light', 'toggle')
    })
}