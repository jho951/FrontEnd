'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdsenseDebugger() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if ('adsbygoogle' in window) {
      console.log('✅ adsbygoogle is loaded');
    } else {
      console.warn('❌ adsbygoogle not found');
      return;
    }

    const adSlots = document.querySelectorAll('.adsbygoogle');

    if (adSlots.length === 0) {
      console.warn('🚫 No .adsbygoogle elements found to render ads');
    } else {
      adSlots.forEach((_slot, i) => {
        try {
          window.adsbygoogle = window.adsbygoogle || [];
          window.adsbygoogle.push({});
          console.log(`📦 adsbygoogle.push() called for slot ${i + 1}`);
        } catch (err) {
          console.error('🚨 adsbygoogle.push() failed:', err);
        }
      });
    }
  }, []);

  return null;
}
