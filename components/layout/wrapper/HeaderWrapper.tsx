import { useEffect, useRef } from 'react';

import Header from '@/components/layout/header/Header';
import AdBanner from '@/components/common/banner/AdBanner';

import { useElementHeight } from '@/hooks/useElementHeight';
import { ADSENSE_SLOT_ID } from '@/constants';

export default function HeaderWrapper() {
  const adRef = useRef<HTMLDivElement | null>(null);
  const adHeight = useElementHeight<HTMLDivElement>(adRef);

  useEffect(() => {
    document.documentElement.style.setProperty('--header-offset', `${adHeight}px`);
  }, [adHeight]);

  return (
    <>
      <AdBanner ref={adRef} slotId={ADSENSE_SLOT_ID} />
      <Header adOffset={adHeight} />
    </>
  );
}
