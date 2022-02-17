export default class Card {
    constructor(id, cat, color, img, author, title, descr) {
        this.id = id
        this.cat = cat
        this.color = color
        this.author = author
        this.title = title
        this.descr = descr

        this.img = function imgRender() {
            if (img) {
                return `<img class="card__img" src="${img}" alt="image" loading="lazy">`
            } else {
                return ''
            }
        }
    }
    render() {
        const cardsWrapper = document.querySelector('.cards__wrapper');

        let card = document.createElement('div');

        card.classList.add('column', 'column_xxl-4', 'column_lg-6', 'column_ssm-12', 'column_ssm-12', 'column_mt-30')

        card.innerHTML = `
            <div class="card">
                <div class="card__category">
                    ${this.cat}
                </div>
                <div class="card__content">
                    <div class="card__content-img" style="background:${this.color}">
                        ${this.img()}
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
                <div class="card__button">
                    <button class="button" data-id="${this.id}">
                        Call to action
                    </button>
                </div>
            </div>      
        `
        cardsWrapper.append(card)
    }
}