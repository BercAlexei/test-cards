export default function theme() {
    const logo = document.querySelector('.header__logo-link'),
          headerRow = document.querySelector('.header'),
          calls = document.querySelectorAll('.call');

    logo.addEventListener('click', (event) => {
        event.preventDefault();
        headerRow.classList.toggle('header_bg-light-blue');

        calls.forEach(item => {
            item.classList.toggle('call_light');
        })
    })
}