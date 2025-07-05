'use client';

import Script from 'next/script';

const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

export default function AdsenseScript() {
  if (process.env.NODE_ENV !== 'production' || !ADSENSE_CLIENT_ID) return null;

  return (
    <Script
      id="adsense-init"
      strategy="afterInteractive"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
      crossOrigin="anonymous"
    />
  );
}
