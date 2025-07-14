import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import Header from '@/components/layout/header/Header';
import AdBanner from '@/components/common/banner/AdBanner';
import { useElementHeight } from '@/hooks/useElementHeight';
export default function HeaderWrapper() {
    const adRef = useRef(null);
    const adHeight = useElementHeight(adRef);
    useEffect(() => {
        document.documentElement.style.setProperty('--header-offset', `${adHeight}px`);
    }, [adHeight]);
    return (_jsxs(_Fragment, { children: [_jsx(AdBanner, { ref: adRef }), _jsx(Header, { adOffset: adHeight })] }));
}
