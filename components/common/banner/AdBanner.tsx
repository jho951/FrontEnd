import { forwardRef } from 'react';

import { AdBannerProps } from '@/types';
import { NODE_ENV } from '@/constants';
import { useAdsense } from '@/hooks/useAdsense';

const AdBanner = forwardRef<HTMLDivElement, AdBannerProps>(
  ({ slotId, height = 100, width = '100%', className }, ref) => {
    const isProd = NODE_ENV === 'production';

    const { adProps, fallback } = useAdsense({
      slotId,
      style: { height, width },
      fallback: !isProd && (
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
      ),
    });

    if (!isProd && fallback) return fallback;

    return (
      <div ref={ref} className={className}>
        <ins {...adProps} />
      </div>
    );
  },
);

export default AdBanner;

AdBanner.displayName = 'AdBanner';
