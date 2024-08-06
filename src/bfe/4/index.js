let count = 0

function fetchData() {
    console.log('API call - ');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

function throttle(func, wait) {
    let waiting = false, lastArgs = null;
    return function (...args) {
        if (!waiting) {
            func.apply(this, args);
            waiting = true;
            setTimeout(() => {
                waiting = false;
            }, wait);
        } else {
            lastArgs = args;
        }
    }
}

const throttledFetch = throttle(fetchData)

btn.onclick = throttledFetch;