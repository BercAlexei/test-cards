export default function common() {
    function changeClassItemArray(element, classes, action) {
        element.forEach(item => {
            changeClass(item, classes, action)
        })
    }

    function changeClass(element, classes, action) {
        element.classList[action](classes)
    }

    return {
        changeClassItemArray,
        changeClass
    }
}