
/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
    class DOM {
        constructor() {
            this.el = el;
        }

        css(propertyName, value) {
            this.el.style[propertyName] = value;
            return this
        }
    }

    return new DOM();
}