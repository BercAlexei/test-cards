export default function header() {

    //humburger
    const humburger = document.querySelector('.header__humburger'),
        menu = document.querySelector('.menu'),
        overlay = document.querySelector('.menu__overlay');

    humburger.addEventListener('click', () => {
        humburger.classList.toggle('header__humburger_active')
        menu.classList.toggle('menu_active')
    })

    document.addEventListener('click', event => {
        if (event.target === overlay) {
            menu.classList.toggle('menu_active')
            humburger.classList.remove('header__humburger_active')
        }
    })

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 992) {
            menu.classList.remove('menu_active')
            humburger.classList.remove('header__humburger_active')
        } 
    });

    //navigation
    const navMenu = document.querySelectorAll('.navigation'),
        navLink = document.querySelectorAll('.navigation__item-link');

    function removeClass(element) {
        element.forEach(item => {
            item.classList.remove('navigation__item-link_active')
        })
    }

    removeClass(navLink)

    navMenu.forEach(menu => {
        menu.addEventListener('click', event => {
            if (event.target.tagName === 'A') {
                event.preventDefault()

                removeClass(navLink)

                event.target.classList.add('navigation__item-link_active')
            }
        })
    });

    //theme
    const logo = document.querySelector('.header__logo-link'),
        headerRow = document.querySelector('.header'),
        ctas = document.querySelectorAll('.ctas');

    logo.addEventListener('click', (event) => {
        event.preventDefault();
        headerRow.classList.toggle('header_bg-light-blue');

        navMenu.forEach(item => {
            item.classList.toggle('navigation_light')
        })

        ctas.forEach(item => {
            item.classList.toggle('ctas_light');
        })
    })
}