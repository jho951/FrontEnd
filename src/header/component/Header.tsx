'use client';

import { useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';

import Logo from '@/header/component/Logo';
import HeaderNav from '@/header/component/HeaderNav';
import { HeaderProps } from '@/header/type/HeaderType';
import MobileDropBox from '@/header/component/MobileDropBox';
import MobileHeaderButton from '@/header/component/MobileHeaderButton';
import { useScrollThresholdReached } from '@/header/util/useScrollThresholdReadched';

import { useElementHeight } from '@/global/util/useElementHeight';
import { useDeviceType, useIsHoverSupported } from '@/global/util/useDeviceSupported';

import styles from '@/header/style/Header.module.css';

export default function Header({ adRef }: HeaderProps) {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const headerHeight = useElementHeight<HTMLDivElement>(headerRef);
  const adHeight = useElementHeight<HTMLDivElement>(adRef ?? { current: null });

  const reached = useScrollThresholdReached(adHeight + headerHeight);
  const isHoverSupported = useIsHoverSupported();
  const { isMobile } = useDeviceType();

  const [menuOpen, setMenuOpen] = useState(false);
  const [forceVisible, setForceVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isHoverSupported || isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const topThreshold = window.innerHeight * 0.01;
      setForceVisible(e.clientY <= topThreshold);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHoverSupported, isMobile]);

  const shouldShowHeader = isMobile || forceVisible || reached || !hasScrolled;

  return (
    <motion.section
      ref={headerRef}
      className={`${styles.header} ${menuOpen && styles.open}`}
      initial={false}
      animate={shouldShowHeader ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.topRow}>
        <Logo />
        <HeaderNav />
        <MobileHeaderButton isOpen={menuOpen} onClick={() => setMenuOpen(v => !v)} />
      </div>
      <MobileDropBox isOpen={menuOpen} onClick={() => setMenuOpen(v => !v)} />
    </motion.section>
  );
}
