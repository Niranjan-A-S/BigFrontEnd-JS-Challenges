function throttle(func, wait) {
    return function () {

    }
}

const throttled = throttle(() => {
    console.log('Called');
}, 100)

throttled();
throttled();