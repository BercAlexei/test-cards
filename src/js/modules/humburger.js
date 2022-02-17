export default function humburger() {
    const humburger = document.querySelector('.header__humburger'),
          menu = document.querySelector('.menu'),
          overlay = document.querySelector('.menu__overlay');

        humburger.addEventListener('click', () => {
            humburger.classList.toggle('header__humburger_active')
            menu.classList.toggle('menu_active')
        })

        document.addEventListener('click', event => {
            if(event.target === overlay) {
                menu.classList.toggle('menu_active')
                humburger.classList.remove('header__humburger_active')
            }
        })
}