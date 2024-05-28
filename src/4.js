function throttle(func, wait) {
    let isRunning = false;
    return function (...args) {
        if (!isRunning) {
            isRunning = true
            func.apply(this, ...args);
            setTimeout(() => {
                isRunning = false;
            }, wait)
        }
    }
}

const throttled = throttle(() => {
    console.log('Called');
}, 100)

throttled();
throttled();