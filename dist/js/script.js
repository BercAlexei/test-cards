/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/cardRender.js":
/*!**************************************!*\
  !*** ./src/js/modules/cardRender.js ***!
  \**************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Card; }
/* harmony export */ });
class Card {
  constructor(id, cat, color, img, author, title, descr) {
    this.id = id;
    this.cat = cat;
    this.color = color;
    this.img = img;
    this.author = author;
    this.title = title;
    this.descr = descr;
  }

  render() {
    const cardsWrapper = document.querySelector('.cards__wrapper');
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
                <div class="card__category">
                    ${this.cat}
                </div>
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
                <button class="btn" data-id="${this.id}">
                    Call to action
                </button>
        `;
    cardsWrapper.append(card);
  }

}

/***/ }),

/***/ "./src/js/modules/clickCard.js":
/*!*************************************!*\
  !*** ./src/js/modules/clickCard.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ clickCard; }
/* harmony export */ });
function clickCard() {
  let cards = document.querySelector('.cards__wrapper');
  cards.addEventListener('click', event => {
    if (event.target.getAttribute('data-id') || event.target.tagName == 'A') {
      let cardTarget = event.target.closest('.card');
      let category = cardTarget.querySelector('.card__category'),
          author = cardTarget.querySelector('.card__author'),
          btn = cardTarget.querySelector('.btn');
      category.classList.add('card__category_blue');
      author.classList.add('card__author_blue');
      btn.classList.add('btn_blue');
    }
  });
}

/***/ }),

/***/ "./src/js/modules/showCards.js":
/*!*************************************!*\
  !*** ./src/js/modules/showCards.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ showCards; }
/* harmony export */ });
/* harmony import */ var _services_getResourse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/getResourse.js */ "./src/js/services/getResourse.js");
/* harmony import */ var _cardRender_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardRender.js */ "./src/js/modules/cardRender.js");


async function showCards() {
  let arrayCards = await (0,_services_getResourse_js__WEBPACK_IMPORTED_MODULE_0__.getResource)('db.json').then(res => res.cards);
  arrayCards.forEach(({
    cat,
    color,
    img,
    author,
    title,
    descr
  }, id) => {
    new _cardRender_js__WEBPACK_IMPORTED_MODULE_1__["default"](id + 1, cat, color, img, author, title, descr).render();
  });
}

/***/ }),

/***/ "./src/js/services/getResourse.js":
/*!****************************************!*\
  !*** ./src/js/services/getResourse.js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResource": function() { return /* binding */ getResource; }
/* harmony export */ });
const getResource = async url => {
  let res = await fetch(url);
  return await res.json();
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***************************!*\
  !*** ./src/js/_script.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_showCards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/showCards.js */ "./src/js/modules/showCards.js");
/* harmony import */ var _modules_clickCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/clickCard.js */ "./src/js/modules/clickCard.js");




document.addEventListener('DOMContentLoaded', () => {
  (0,_modules_showCards_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_clickCard_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map