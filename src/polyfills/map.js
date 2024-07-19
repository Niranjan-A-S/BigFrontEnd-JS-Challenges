const array1 = [];
const array2 = [1];
const array3 = [1, 3, 5, 8];

const multiplyByTwo = num => num * 2;
console.log({
    a: array1.map(multiplyByTwo),
    b: array2.map(multiplyByTwo),
    c: array3.map(multiplyByTwo),
});

Array.prototype.customMap = function (cb) {
    if (!Array.isArray(this)) {
        throw new Error(`${this} is not an array`);
    }

    let result = new Array(0);
    for (const item of this) {
        result.push(cb(item))
    }
    return result;
}

console.log({
    a: array1.customMap(multiplyByTwo),
    b: array2.customMap(multiplyByTwo),
    c: array3.customMap(multiplyByTwo),
});

//Better solution is
/**
 * Array.prototype.myMap = function(callback, thisArg) {
  if(typeof callback !== 'function') {
    throw new Error('')
  }
  const length = this.length;
  const result = new Array(length);
  
  for (let i = 0; i < length; i++) {
    if (i in this) {
        result[i] = callback.call(thisArg, this[i], i, this);
    }
  }

  return result
}
 */


