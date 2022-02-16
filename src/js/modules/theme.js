export default function theme() {
    const logo = document.querySelector('.header__logo-link'),
          headerWrapper = document.querySelector('.header_dark');

    logo.addEventListener('click', (event) => {
        event.preventDefault();
        headerWrapper.classList.toggle('header_light-blue')
    })
}