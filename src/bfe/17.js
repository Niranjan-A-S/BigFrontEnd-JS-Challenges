class NodeStore {
    /**
    * @param {Node} node
    * @param {any} value
    */
    constructor() {
        this.store = {};
    }

    set(node, value) {
        node.key = Symbol();
        this.store[node.key] = value;
    }
    /**
     * @param {Node} node
     * @return {any}
     */
    get(node) {
        return this.store[node.key];
    }

    /**
     * @param {Node} node
     * @return {Boolean}
     */
    has(node) {
        return !!this.store[node.key]
    }
}

const node = document.createElement('p')
const store = new NodeStore()
store.set(node, 1)