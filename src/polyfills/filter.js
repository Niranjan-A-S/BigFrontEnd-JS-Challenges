const array1 = [];
const array2 = [1];
const array3 = [1, 3, 5, 8];

const handler = item => item > 3;

console.log({
    a: array1.filter(handler),
    b: array2.filter(handler),
    c: array3.filter(handler)
});

Array.prototype.customFilter = function (cb) {
    if (!Array.isArray(this)) {
        throw new Error(`${this} is not an array`);
    }

    let result = new Array(0);
    for (const item of this) {
        if (cb(item)) {
            result.push(item)
        }
    }
    return result;
}
console.log({
    a: array1.customFilter(handler),
    b: array2.customFilter(handler),
    c: array3.customFilter(handler)
});