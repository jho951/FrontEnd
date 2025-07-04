import { useEffect, useState, RefObject } from 'react';

/**
 * 주어진 ref 요소의 높이를 측정해서 반환하는 커스텀 훅
 */

export function useElementHeight<T extends HTMLElement | null>(
  ref: RefObject<T | null>,
  defaultHeight = 64,
): number {
  const [height, setHeight] = useState(defaultHeight);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.offsetHeight);
      }
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);

    return () => observer.disconnect();
  }, [ref]);

  return height;
}
