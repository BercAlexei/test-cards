export default function humburger() {
    const humburger = document.querySelector('.header__humburger');

        humburger.addEventListener('click', () => {
            humburger.classList.toggle('header__humburger_active')
        })

}