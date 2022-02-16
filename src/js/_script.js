'use strict'
import showCards from './modules/showCards.js'
import clickCards from './modules/clickCard.js'
import humburger from './modules/humburger.js'

document.addEventListener('DOMContentLoaded', () => {
    showCards();
    clickCards();
    humburger();
})
