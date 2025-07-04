'use client';

import { useEffect, useState, forwardRef } from 'react';
import { ADSENSE_CLIENT_ID, ADSENSE_SLOT_ID } from '@/global/constant/secret';

const AdBanner = forwardRef<HTMLDivElement>((props, ref) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !ADSENSE_CLIENT_ID) return;

    const adElements = document.querySelectorAll('ins.adsbygoogle');
    const needsInit = Array.from(adElements).some(
      el => !el.getAttribute('data-adsbygoogle-status'),
    );

    if (needsInit) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.warn('Adsense initialization failed:', error);
        setHasError(true);
      }
    }
  }, []);

  if (process.env.NODE_ENV !== 'production') {
    return (
      <div
        ref={ref}
        style={{
          height: '100px',
          width: '100%',
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
          fontSize: '14px',
          fontStyle: 'italic',
        }}
      >
        [Ad Placeholder - development mode]
      </div>
    );
  }

  if (!ADSENSE_CLIENT_ID || hasError) return null;

  return (
    <div ref={ref}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '100px' }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={ADSENSE_SLOT_ID ?? '1234567890'}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
});

AdBanner.displayName = 'AdBanner';
export default AdBanner;
