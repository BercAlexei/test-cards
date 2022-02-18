import common from "./common.js";

export default function accordion() {
    let { changeClassItemArray, changeClass } = common();

    const accordionItem = document.querySelectorAll('.accordion__item'),
        accardionHead = document.querySelectorAll('.accordion__item-head'),
        classActive = 'accordion__item_active';

    changeClassItemArray(accordionItem, classActive, 'remove')

    accardionHead.forEach(item => {
        item.addEventListener('click', function () {

            if (!this.parentNode.classList.contains(classActive)) {
                changeClassItemArray(accordionItem, classActive, 'remove')
                changeClass(this.parentNode, classActive, 'add')
            } else {
                changeClass(this.parentNode, classActive, 'remove')
            }
        })
    })
}