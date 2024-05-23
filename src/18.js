// Given an input of array, 
// which is made of items with >= 3 properties

let items = [
    { color: 'red', type: 'tv', age: 18 },
    { color: 'silver', type: 'phone', age: 20 },
    { color: 'blue', type: 'book', age: 17 }
]

// an exclude array made of key value pair
const excludes = [
    { k: 'color', v: 'silver' },
    { k: 'type', v: 'tv' },
]
//brute force
// function excludeItems(items, excludes) {
//     excludes.forEach(pair => {
//         items = items.filter(item => item[pair.k] !== pair.v)
//     })

//     return items
// }


function excludeItems(items, exclude) {
    const excludeMap = new Map();
    for (const { k, v } of exclude) {
        if (!excludeMap.has(k)) {
            excludeMap.set(k, new Set())
        }
        excludeMap.get(k).add(v)
    }
    return items.filter(item => Object.keys(item).every(key => !excludeMap.has(key) || !excludeMap.get(key).has(item[key])))
}

console.log(excludeItems(items, excludes));