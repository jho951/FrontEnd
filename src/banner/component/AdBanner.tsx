'use client';

import { forwardRef } from 'react';
import { useAdsenseSlot } from '@/banner/util/useAdsenseSlot';

const AdBanner = forwardRef<HTMLDivElement>((props, ref) => {
  const { adProps } = useAdsenseSlot({
    slotId: '9876543210',
    responsive: true,
    format: 'auto',
  });

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

  return (
    <div ref={ref}>
      <ins {...adProps} />
    </div>
  );
});

AdBanner.displayName = 'AdBanner';
export default AdBanner;
