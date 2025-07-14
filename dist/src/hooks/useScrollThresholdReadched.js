import { useEffect, useState } from 'react';
export function useScrollThresholdReached(threshold) {
    const [reached, setReached] = useState(false);
    useEffect(() => {
        const handler = () => {
            setReached(window.scrollY >= threshold);
        };
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, [threshold]);
    return reached;
}
