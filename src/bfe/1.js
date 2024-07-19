

// This is a JavaScript coding problem from BFE.dev 

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return curried.bind(this, ...args);
    }
}

const join = (a, b, c) => {
    return `${a}_${b}_${c}`
}

const curriedJoin = curry(join);
const result = curriedJoin('a')('b')('c');
//Understand that when the after the first function call of curriedJoin, we will get a function with 'a' as the only argument but when it is called again 'b' also gets added to the arguments.so 'a','b'
console.log(result);
