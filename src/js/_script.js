'use strict'
import showCards from './modules/showCards.js'
import clickCards from './modules/clickCard.js'
import humburger from './modules/humburger.js'
import theme from './modules/theme.js'

document.addEventListener('DOMContentLoaded', () => {
    showCards();
    clickCards();
    humburger();
    theme();
})
