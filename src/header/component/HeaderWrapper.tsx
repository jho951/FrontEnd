'use client';

import { useRef } from 'react';

import AdBanner from '@/banner/component/AdBanner';

import Header from '@/header/component/Header';
import { HeaderProps } from '@/header/type/HeaderType';
import { useScrollThresholdReached } from '@/header/util/useScrollThresholdReadched';

import { useElementHeight } from '@/global/util/useElementHeight';

import styles from '@/banner/AdHeaderWrapper.module.css';

export default function HeaderWrapper({ adRef }: HeaderProps) {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const headerHeight = useElementHeight<HTMLDivElement>(headerRef);
  const adHeight = useElementHeight<HTMLDivElement>(adRef ?? { current: null });

  const reached = useScrollThresholdReached(adHeight + headerHeight);

  return (
    <>
      <div style={{ height: reached ? headerHeight : 0 }} />
      <header className={styles.container}>
        <AdBanner ref={adRef} />
        <Header />
      </header>
    </>
  );
}
