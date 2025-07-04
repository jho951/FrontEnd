'use client';

import { useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';

import Logo from '@/header/component/Logo';
import HeaderNav from '@/header/component/HeaderNav';

import MobileDropBox from '@/header/component/MobileDropBox';
import MobileHeaderButton from '@/header/component/MobileHeaderButton';

import styles from '@/header/style/Header.module.css';

export default function Header() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <motion.section
      className={`${styles.header} ${menuOpen && styles.open}`}
      initial={false}
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
