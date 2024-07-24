let count = 0

function fetchData() {
    console.log('API call - ');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

function throttle(cb, delay = 1000) {
    let flag = true;
    return function (args) {
        if (flag) {
            cb.call(this, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay)
        }
    }
}

const throttledFetch = throttle(fetchData)

btn.onclick = fetchData;