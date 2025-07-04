import { useEffect } from 'react';

/**
 * 스크롤 잠금 훅
 * @param lock - true일 때 document.body의 스크롤을 막습니다.
 */

export default function useScrollLock(lock: boolean) {
  useEffect(() => {
    if (lock) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [lock]);
}
