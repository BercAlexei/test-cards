import common from "./common.js";

export default function header() {

    let {humburger, menu, overlay, navMenu, navLink, logo, headerRow, ctas, classesArray, classesElem} = common();

    humburger.addEventListener('click', () => {
        classesElem(humburger, 'header__humburger_active', 'toggle')
        classesElem(menu, 'menu_active', 'toggle')
    })

    document.addEventListener('click', event => {
        if (event.target === overlay) {
            classesElem(menu, 'menu_active', 'toggle')
            classesElem(humburger, 'header__humburger_active', 'remove')
        }
    })

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 992) {
            classesElem(menu, 'menu_active', 'remove')
            classesElem(humburger, 'header__humburger_active', 'remove')
        }
    });

    //navigation

    classesArray(navLink, 'navigation__item-link_active', 'remove')

    navMenu.forEach(menu => {
        menu.addEventListener('click', event => {
            if (event.target.tagName === 'A') {
                event.preventDefault()

                classesArray(navLink, 'navigation__item-link_active', 'remove')
                classesElem(event.target, 'navigation__item-link_active', 'add')
            }
        })
    });

    //theme

    logo.addEventListener('click', (event) => {
        event.preventDefault();

        classesElem(headerRow, 'header_bg-light-blue', 'toggle')
        classesArray(navMenu, 'navigation_light', 'toggle')
        classesArray(ctas, 'ctas_light', 'toggle')
    })
}