import common from "./common.js";

export default async function header() {
    let { changeClassItemArray, changeClass } = common();

    const logo = document.querySelector('.header__logo-link'),
        header = document.querySelector('.header'),
        humburger = document.querySelector('.header__humburger'),
        overlay = document.querySelector('.menu__overlay');

    let menuWindow = [humburger, overlay];

    logo.addEventListener('click', (event) => {
        event.preventDefault();
        changeClass(header, 'header_light', 'toggle')
    })

    menuWindow.forEach(item => {
        item.addEventListener('click', () => {
            changeClass(header, 'header_open', 'toggle')
        })
    })

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 992) {
            changeClass(header, 'header_open', 'remove')
        }
    });

    // navigation
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
}