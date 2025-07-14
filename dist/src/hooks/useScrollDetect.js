import { useEffect, useState } from 'react';
function useScrollDetect(delay = 100) {
    const [isScrolling, setIsScrolling] = useState(false);
    useEffect(() => {
        let timeout;
        const handleScroll = () => {
            setIsScrolling(true);
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setIsScrolling(false);
            }, delay);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeout);
        };
    }, [delay]);
    return isScrolling;
}
export { useScrollDetect };
