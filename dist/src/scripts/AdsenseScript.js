'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import Script from 'next/script';
import { ADSENSE_CLIENT_ID, NODE_ENV } from '@/constants';
export default function AdsenseScript() {
    if (NODE_ENV !== 'production' || !ADSENSE_CLIENT_ID)
        return null;
    return (_jsx(Script, { id: "adsense-init", strategy: "afterInteractive", async: true, src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`, crossOrigin: "anonymous" }));
}
