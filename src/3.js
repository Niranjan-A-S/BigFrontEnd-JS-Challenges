
// This is a JavaScript coding problem from BFE.dev 
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
    if (!depth || depth < 1) {
        return arr
    }
    while (depth) {
        depth--;
        return arr.reduce((acc, cur) => {
            if (!Array.isArray(cur)) {
                return acc.concat(cur)
            } else {
                return acc.concat(flat(cur, depth))
            }
        }, []);
    }
}
const arr = ([1, [2], [3, [4]]])

const output1 = flat(arr)// [1, 2, 3, [4]]
const output2 = flat(arr, 1) // [1, 2, 3, [4]]
const output3 = flat(arr, 2)// [1, 2, 3, 4], 2)

console.log({ output1, output2, output3 });
console.log({ output3 });

