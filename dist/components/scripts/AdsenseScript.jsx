'use client';
import Script from 'next/script';
import { ADSENSE_CLIENT_ID, NODE_ENV } from '../../constants';
export default function AdsenseScript() {
    if (NODE_ENV !== 'production' || !ADSENSE_CLIENT_ID)
        return null;
    return (<Script id="adsense-init" strategy="afterInteractive" async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`} crossOrigin="anonymous"/>);
}
