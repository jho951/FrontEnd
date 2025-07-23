'use client';

import { useEffect, useState } from 'react';

import {
  ADSENSE_CLIENT_ID,
  ADSENSE_SLOT_ID,
  DEFAULT_AD_FORMAT,
  DEFAULT_AD_STYLE,
} from '@/constants';

import { pushAds } from '@/libs/adsense/google';

import type { AdsenseSlotOptions } from '@/types';

function useAdsense({
  slotId,
  responsive = true,
  format = DEFAULT_AD_FORMAT,
  style = DEFAULT_AD_STYLE,
  onError,
  fallback,
}: AdsenseSlotOptions) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      pushAds({
        google_ad_client: ADSENSE_CLIENT_ID!,
        google_ad_slot: ADSENSE_SLOT_ID!,
        google_ad_format: format,
        google_ad_width: typeof style.width === 'number' ? style.width : undefined,
        google_ad_height: typeof style.height === 'number' ? style.height : undefined,
        responsive: responsive ? 'true' : 'false',
      });

      setLoaded(true);
    } catch (e) {
      console.warn('[AdSense] Failed to load ads:', e);
      if (onError) onError();
    }
  }, [slotId, format, responsive, style, onError]);

  const adProps = {
    className: 'adsbygoogle',
    style,
    'data-ad-client': ADSENSE_CLIENT_ID,
    'data-ad-slot': slotId,
    'data-ad-format': format,
    'data-full-width-responsive': responsive ? 'true' : 'false',
  };

  return {
    adProps,
    loaded,
    fallback: !loaded && fallback ? fallback : null,
  };
}

export { useAdsense };
