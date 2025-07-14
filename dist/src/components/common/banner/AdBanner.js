'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { useAdsense } from '@/hooks';
import { ADSENSE_SLOT_ID, NODE_ENV } from '@/constants';
const AdBanner = forwardRef(({ slotId = ADSENSE_SLOT_ID, height = 100, width = '100%', className }, ref) => {
    const { adProps } = useAdsense({ slotId });
    if (NODE_ENV !== 'production') {
        return (_jsx("div", { ref: ref, className: className, style: {
                height,
                width,
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666',
                fontSize: '14px',
                fontStyle: 'italic',
            }, children: "[Ad Placeholder - development mode]" }));
    }
    return (_jsx("div", { ref: ref, className: className, children: _jsx("ins", { ...adProps, style: { ...adProps.style, height, width } }) }));
});
export default AdBanner;
