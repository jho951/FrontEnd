import { useEffect } from 'react';

export function useIntersectionObserver(
  ref: React.RefObject<Element>,
  callback: () => void,
  options?: IntersectionObserverInit,
) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) callback();
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, callback, options]);
}
