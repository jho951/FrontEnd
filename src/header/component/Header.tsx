'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import Logo from '@/header/component/Logo';
import HeaderNav from '@/header/component/HeaderNav';
import MobileDropBox from '@/header/component/MobileDropBox';
import MobileHeaderButton from '@/header/component/MobileHeaderButton';

import useBodyScrollLock from '@/global/util/useBodyScrollLock';

import styles from '@/header/style/Header.module.css';

export default function Header() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useBodyScrollLock(menuOpen);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {menuOpen && <div className={styles.backdrop} onClick={() => setMenuOpen(v => !v)} />}

      <motion.section
        className={`${styles.header} ${menuOpen && styles.open}`}
        initial={false}
        animate={{
          opacity: isScrolling ? 0.15 : 1,
        }}
        transition={{
          opacity: {
            duration: isScrolling ? 0.4 : 0.8,
            ease: 'easeInOut',
          },
        }}
      >
        <div className={styles.topRow}>
          <Logo />
          <HeaderNav />
          <MobileHeaderButton isOpen={menuOpen} onClick={() => setMenuOpen(v => !v)} />
        </div>

        <MobileDropBox isOpen={menuOpen} onClick={() => setMenuOpen(v => !v)} />
      </motion.section>
    </>
  );
}
