export default class Card {
    constructor(id, cat, color, img, author, title, descr) {
        this.id = id
        this.cat = cat
        this.color = color
        this.img = img
        this.author = author
        this.title = title
        this.descr = descr
    }
    render() {
        const cardsWrapper = document.querySelector('.row_cards');

        let card = document.createElement('div');

        card.classList.add('column', 'column_cards')

        card.innerHTML = `
            <div class="card">
                <div class="card__category">
                    ${this.cat}
                </div>
                <div class="card__content">
                    <div class="card__img" style="background: ${this.color} url('${this.img}') center center / cover no-repeat;">
                    </div>

                    <div class="card__author">
                        <a href="#">
                            ${this.author}
                        </a>
                    </div>

                    <div class="card__title">
                        ${this.title}
                    </div>

                    <div class="card__text">
                        ${this.descr}
                    </div>
                </div>
                <div class="card__btn">
                    <button class="btn" data-id="${this.id}">
                        Call to action
                    </button>
                </div>
            </div>      
        `
        cardsWrapper.append(card)
    }
}