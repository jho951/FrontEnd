import { useLayoutEffect } from 'react';
/**
 * 스크롤 잠금 훅
 * @param lock - true일 때 document.body의 스크롤을 막습니다.
 */
function useScrollLock(lock) {
    useLayoutEffect(() => {
        if (lock) {
            const originalStyle = window.getComputedStyle(document.body).overflow;
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = originalStyle;
            };
        }
    }, [lock]);
}
export { useScrollLock };
