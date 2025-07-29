import { useEffect, useRef } from 'react';
import Header from '@/components/layout/header/Header';

import { useElementHeight } from '@/hooks/useElementHeight';

export default function HeaderWrapper() {
  const adRef = useRef<HTMLDivElement | null>(null);
  const adHeight = useElementHeight<HTMLDivElement>(adRef);

  useEffect(() => {
    document.documentElement.style.setProperty('--header-offset', `${adHeight}px`);
  }, [adHeight]);

  return <Header pathname={''} />;
}
