'use client';

import { forwardRef, useEffect } from 'react';
import { ADSENSE_CLIENT_ID, ADSENSE_SLOT_ID } from '@/global/constant/secret';

import styles from '@/banner/style/AdBanner.module.css';

const AdBanner = forwardRef<HTMLDivElement>((props, ref) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const adElements = document.querySelectorAll('ins.adsbygoogle');
    const needsInit = Array.from(adElements).some(
      el => !el.getAttribute('data-adsbygoogle-status'),
    );

    if (needsInit) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.warn('Adsense initialization failed:', error);
      }
    }
  }, []);

  if (!ADSENSE_CLIENT_ID) return null;

  return (
    <section className={styles.banner} ref={ref} {...props}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '100px' }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={ADSENSE_SLOT_ID ?? '1234567890'}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </section>
  );
});

AdBanner.displayName = 'AdBanner';
export default AdBanner;
