import { useState, useEffect, useRef, useCallback } from 'react';
import { SCROLL_DELTA } from '@/header/constant/headerConstant';

export function useScrollDirection() {
  const lastScrollY = useRef(0);
  const [scrollState, setScrollState] = useState({ scrolled: false, hidden: false });

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const delta = Math.abs(currentScrollY - lastScrollY.current);

    if (delta < SCROLL_DELTA) {
      return;
    }

    const scrolled = currentScrollY > 50;
    const goingDown = currentScrollY > lastScrollY.current;
    const hidden = goingDown && currentScrollY > 100;

    setScrollState(prev => {
      if (prev.scrolled !== scrolled || prev.hidden !== hidden) {
        lastScrollY.current = currentScrollY;
        return { scrolled, hidden };
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    const throttled = () => {
      handleScroll();
    };

    window.addEventListener('scroll', throttled, { passive: true });
    return () => window.removeEventListener('scroll', throttled);
  }, [handleScroll]);

  return scrollState;
}
