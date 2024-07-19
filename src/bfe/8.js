
// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {any[]} arr
 * @returns {void}
 */

//input => [1, 2, 3, 4]
//output => [3, 4, 1, 2]

/**
 * Steps
 *  - Find a random index on each iteration
 *  - Loop through the array
 */
function shuffle(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        const current = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = current;
    }
}

shuffle([1, 2, 3, 4])


