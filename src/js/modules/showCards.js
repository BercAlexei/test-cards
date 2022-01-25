import { getResource } from "../services/getResourse.js";
import cardRender from './cardRender.js'

export default async function showCards () {
    let arrayCards = await getResource('db.json').then(res => res.cards);

    arrayCards.forEach(({cat, color, img, author, title, descr}, id) => {
        new cardRender(id + 1, cat, color, img, author, title, descr).render()
    });
}