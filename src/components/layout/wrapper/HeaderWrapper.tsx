import { useRef } from 'react';

import Header from '@/components/layout/header/Header';
import AdBanner from '@/components/common/banner/AdBanner';

import { useElementHeight } from '@/hooks/useElementHeight';

export default function HeaderWrapper() {
  const adRef = useRef<HTMLDivElement | null>(null);
  const adHeight = useElementHeight<HTMLDivElement>(adRef);

  return (
    <>
      <AdBanner ref={adRef} />
      <Header adOffset={adHeight} />
    </>
  );
}
