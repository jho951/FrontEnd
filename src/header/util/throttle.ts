function throttle(func: () => void, delay: number) {
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
