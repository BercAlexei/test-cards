export default function humburger() {
    const humburger = document.querySelector('.header__humburger'),
          menu = document.querySelector('.overlay');

        humburger.addEventListener('click', () => {
            humburger.classList.toggle('header__humburger_active')
            menu.classList.toggle('overlay_active')
        })

}