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

  const [isScrolling, setIsScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [forceVisible, setForceVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      animate={shouldShowHeader ? { y: 0 } : { y: -20 }}
      transition={{
        opacity: {
          duration: isScrolling ? 0.8 : 1.2,
          ease: 'easeInOut',
        },
        y: {
          duration: 0.3,
          ease: 'easeInOut',
        },
      }}
      style={{ opacity: isScrolling ? 0.1 : 1 }}
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
