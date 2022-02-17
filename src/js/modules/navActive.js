export default function navActive() {
    const navMenu = document.querySelectorAll('.navigation'),
          navLink = document.querySelectorAll('.navigation__item-link');

    navLink.forEach(item => {
        item.classList.remove('navigation__item-link_active')
    });

    navMenu.forEach(menu => {
        menu.addEventListener('click', event => {
            if(event.target.tagName === 'A') {
                event.preventDefault()
                
                navLink.forEach(item => {
                    item.classList.remove('navigation__item-link_active')
                });
                event.target.classList.add('navigation__item-link_active')
            }
        })
    });
}