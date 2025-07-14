function throttle(func, delay) {
    let lastCall = 0;
    return () => {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            func();
        }
    };
}
export { throttle };
