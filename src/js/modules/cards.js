import { getResource } from "../services/getResourse.js";
import cardRender from './cardRender.js'

export default async function cards() {
    let arrayCards = await getResource('db.json').then(res => res.cards);

    arrayCards.forEach(({ cat, color, img, author, title, descr }, id) => {
        new cardRender(id + 1, cat, color, img, author, title, descr).render()
    });

    //click card
    let cards = document.querySelector('.cards__wrapper');

    cards.addEventListener('click', (event) => {
        if (event.target.getAttribute('data-id') || event.target.tagName == 'A') {
            event.preventDefault();
            let cardTarget = event.target.closest('.card')

            let category = cardTarget.querySelector('.card__category'),
                author = cardTarget.querySelector('.card__author'),
                btn = cardTarget.querySelector('.button');

            category.classList.toggle('card__category_blue')
            author.classList.toggle('card__author_blue')
            btn.classList.toggle('button_bg-blue')
        }
    })
}