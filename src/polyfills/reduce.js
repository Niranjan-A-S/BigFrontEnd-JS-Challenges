const array = [1, 2, 3];

function handler(acc, curr) {
    return acc + curr;
}

const sum = array.reduce(handler, 0);
console.log(sum); // 6

Array.prototype.customReduce = function (cb, acc) {
    for (const item of this) {
        acc = cb(acc, item); // Note the order of arguments here
    }
    return acc;
}

const sum2 = array.customReduce(handler, 0);
console.log(sum2); // 6


//This is correct but more efficient one covering all the edge cases are
/**
 * Array.prototype.customReduce = function (cb, initialValue) {
    if (typeof cb !== 'function') {
        throw new TypeError(cb + ' is not a function');
    }

    const array = this;
    let acc, startIndex;

    // Handle empty array without an initial value
    if (array.length === 0 && arguments.length < 2) {
        throw new TypeError('Reduce of empty array with no initial value');
    }

    // Determine the initial value of the accumulator
    if (arguments.length >= 2) {
        acc = initialValue;
        startIndex = 0;
    } else {
        acc = array[0];
        startIndex = 1;
    }

    // Iterate over the array, applying the callback function
    for (let i = startIndex; i < array.length; i++) {
        acc = cb(acc, array[i], i, array);
    }

    return acc;
}

// Example usage
const array = [1, 2, 3];

function handler(acc, curr) {
    return acc + curr;
}

const sum = array.reduce(handler, 0);
console.log(sum); // 6

const sum2 = array.customReduce(handler, 0);
console.log(sum2); // 6

 */