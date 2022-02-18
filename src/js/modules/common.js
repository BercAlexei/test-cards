export default function common() {
    const accordionItem = document.querySelectorAll('.accordion__item'),
        accardionHead = document.querySelectorAll('.accordion__item-head'),
        humburger = document.querySelector('.header__humburger'),
        menu = document.querySelector('.menu'),
        overlay = document.querySelector('.menu__overlay'),
        navMenu = document.querySelectorAll('.navigation'),
        navLink = document.querySelectorAll('.navigation__item-link'),
        logo = document.querySelector('.header__logo-link'),
        headerRow = document.querySelector('.header'),
        ctas = document.querySelectorAll('.ctas');

    function classesArray(element, classes, action) {
        element.forEach(item => {
            item.classList[action](classes)
        })
    }

    function classesElem(element, classes, action) {
        element.classList[action](classes)
    }

    return {
        accordionItem,
        accardionHead,
        humburger,
        menu,
        overlay,
        navMenu,
        navLink,
        logo,
        headerRow,
        ctas,
        classesArray,
        classesElem
    }
}