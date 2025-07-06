'use client';

import { forwardRef } from 'react';

import { useAdsense } from '@/hooks';
import { AdBannerProps } from '@/types';

const AdBanner = forwardRef<HTMLDivElement, AdBannerProps>(
  (
    { slotId = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID, height = 100, width = '100%', className },
    ref,
  ) => {
    const { adProps } = useAdsense({ slotId });

    if (process.env.NODE_ENV !== 'production') {
      return (
        <div
          ref={ref}
          className={className}
          style={{
            height,
            width,
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

    return (
      <div ref={ref} className={className}>
        <ins {...adProps} style={{ ...adProps.style, height, width }} />
      </div>
    );
  },
);

export default AdBanner;
