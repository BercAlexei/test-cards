export default function theme() {
    const logo = document.querySelector('.header__logo-link'),
          headerWrapper = document.querySelector('.header_dark'),
          actions = document.querySelectorAll('.call');

    logo.addEventListener('click', (event) => {
        event.preventDefault();
        headerWrapper.classList.toggle('header_light-blue');
        actions.forEach(item => {
            console.log(item)
            item.classList.toggle('call_light');
        })
    })
}