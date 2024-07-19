/**
 * @param {Function} func
 * @return {Function}
 */
function once(func) {
    let result;
    return function (...args) {
        if (func) {
            result = func.call(this, ...args);
            func = null;
        }
        return result;
    }
}


const onced = once(function (num) {
    return num;
})

const a = onced(1);
const b = onced(1);
const c = onced(3);

console.log({ a, b, c })
