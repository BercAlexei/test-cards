export default function accordion() {
    const accordeonItem = document.querySelectorAll('.accordion__item'),
        accardeonHead = document.querySelectorAll('.accordion__item-head');

    accordeonItem.forEach(item => {
        item.classList.remove('accordeon__item_active')
    })

    accardeonHead.forEach(item => {
        item.addEventListener('click', function () {

            if (!this.parentNode.classList.contains('accordion__item_active')) {

                accordeonItem.forEach(item => {
                    item.classList.remove('accordion__item_active')
                    item.childNodes[1].style.maxHeight = '0px'
                })

                this.parentNode.classList.add('accordion__item_active')
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px'

            } else {

                this.parentNode.classList.remove('accordion__item_active')
                this.nextElementSibling.style.maxHeight = '0px'
            }
        })
    })
}