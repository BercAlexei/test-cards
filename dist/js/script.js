/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accorderon.js":
/*!**************************************!*\
  !*** ./src/js/modules/accorderon.js ***!
  \**************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ accordeon; }
/* harmony export */ });
function accordeon() {
  const accordeonItem = document.querySelectorAll('.accordeon__item'),
        accardeonHead = document.querySelectorAll('.accordeon__item-head');
  accordeonItem.forEach(item => {
    item.classList.remove('accordeon__item_active');
  });
  accardeonHead.forEach(item => {
    item.addEventListener('click', function () {
      if (!this.parentNode.classList.contains('accordeon__item_active')) {
        accordeonItem.forEach(item => {
          item.classList.remove('accordeon__item_active');
          item.childNodes[1].style.maxHeight = '0px';
        });
        this.parentNode.classList.add('accordeon__item_active');
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
      } else {
        this.parentNode.classList.remove('accordeon__item_active');
        this.nextElementSibling.style.maxHeight = '0px';
      }
    });
  });
}

/***/ }),

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
    this.author = author;
    this.title = title;
    this.descr = descr;

    this.img = function imgRender() {
      if (img) {
        return `<img class="card__img" src="${img}" alt="image" loading="lazy">`;
      } else {
        return '';
      }
    };
  }

  render() {
    const cardsWrapper = document.querySelector('.cards__wrapper');
    let card = document.createElement('div');
    card.classList.add('column', 'column_xxl-4', 'column_lg-6', 'column_ssm-12', 'column_ssm-12', 'column_mt-30');
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
        `;
    cardsWrapper.append(card);
  }

}

/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ cards; }
/* harmony export */ });
/* harmony import */ var _services_getResourse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/getResourse.js */ "./src/js/services/getResourse.js");
/* harmony import */ var _cardRender_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardRender.js */ "./src/js/modules/cardRender.js");


async function cards() {
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
  }); //клик по кариочкам

  let cards = document.querySelector('.cards__wrapper');
  cards.addEventListener('click', event => {
    if (event.target.getAttribute('data-id') || event.target.tagName == 'A') {
      let cardTarget = event.target.closest('.card');
      let category = cardTarget.querySelector('.card__category'),
          author = cardTarget.querySelector('.card__author'),
          btn = cardTarget.querySelector('.button');
      category.classList.toggle('card__category_blue');
      author.classList.toggle('card__author_blue');
      btn.classList.toggle('button_bg-blue');
    }
  });
}

/***/ }),

/***/ "./src/js/modules/header.js":
/*!**********************************!*\
  !*** ./src/js/modules/header.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ header; }
/* harmony export */ });
function header() {
  //humburger
  const humburger = document.querySelector('.header__humburger'),
        menu = document.querySelector('.menu'),
        overlay = document.querySelector('.menu__overlay');
  humburger.addEventListener('click', () => {
    humburger.classList.toggle('header__humburger_active');
    menu.classList.toggle('menu_active');
  });
  document.addEventListener('click', event => {
    if (event.target === overlay) {
      menu.classList.toggle('menu_active');
      humburger.classList.remove('header__humburger_active');
    }
  }); //navigation

  const navMenu = document.querySelectorAll('.navigation'),
        navLink = document.querySelectorAll('.navigation__item-link');

  function removeClass(element) {
    element.forEach(item => {
      item.classList.remove('navigation__item-link_active');
    });
  }

  removeClass(navLink);
  navMenu.forEach(menu => {
    menu.addEventListener('click', event => {
      if (event.target.tagName === 'A') {
        event.preventDefault();
        removeClass(navLink);
        event.target.classList.add('navigation__item-link_active');
      }
    });
  }); //theme

  const logo = document.querySelector('.header__logo-link'),
        headerRow = document.querySelector('.header'),
        ctas = document.querySelectorAll('.ctas');
  logo.addEventListener('click', event => {
    event.preventDefault();
    headerRow.classList.toggle('header_bg-light-blue');
    ctas.forEach(item => {
      item.classList.toggle('ctas_light');
    });
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
/* harmony import */ var _modules_cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cards.js */ "./src/js/modules/cards.js");
/* harmony import */ var _modules_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header.js */ "./src/js/modules/header.js");
/* harmony import */ var _modules_accorderon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accorderon.js */ "./src/js/modules/accorderon.js");





document.addEventListener('DOMContentLoaded', () => {
  (0,_modules_cards_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_accorderon_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map