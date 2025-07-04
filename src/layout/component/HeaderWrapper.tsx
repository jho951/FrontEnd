'use client';

import { useRef } from 'react';

import AdBanner from '@/banner/component/AdBanner';

import Header from '@/header/component/Header';

import { useElementHeight } from '@/global/util/useElementHeight';

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
