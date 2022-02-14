export default function clickCard () {
    let cards = document.querySelector('.cards__wrapper');

    cards.addEventListener('click', (event) => {
        if(event.target.getAttribute('data-id') || event.target.tagName == 'A') {
            let cardTarget = event.target.closest('.card')

            let category = cardTarget.querySelector('.card__category'),
                author = cardTarget.querySelector('.card__author'),
                btn = cardTarget.querySelector('.button');
            
            category.classList.toggle ('card__category_blue')
            author.classList.toggle ('card__author_blue')
            btn.classList.toggle ('button_bg-blue')
        }
    })
}