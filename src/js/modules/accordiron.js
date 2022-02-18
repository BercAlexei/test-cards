import common from "./common.js";

export default function accordion() {
    let {accordionItem, accardionHead, classesArray, classesElem} = common();

    classesArray(accordionItem, 'accordion__item_active', 'remove')

    accardionHead.forEach(item => {
        item.addEventListener('click', function () {

            if (!this.parentNode.classList.contains('accordion__item_active')) {
                classesArray(accordionItem, 'accordion__item_active', 'remove')
                classesElem(this.parentNode, 'accordion__item_active', 'add')
            } else {
                classesElem(this.parentNode, 'accordion__item_active', 'remove')
            }
        })
    })
}