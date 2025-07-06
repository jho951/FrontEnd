'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import Logo from '@/components/layout/header/Logo';
import HeaderNav from '@/components/layout/header/HeaderNav';
import MobileDropBox from '@/components/layout/header/MobileDropBox';
import MobileHeaderButton from '@/components/layout/header/MobileHeaderButton';

import { useScrollDetect, useScrollLock } from '@/hooks';

import type { HeaderProps } from '@/types';

import styles from '@/styles/header/Header.module.css';

function Header({ adOffset }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const isScrolling = useScrollDetect(100);
  useScrollLock(menuOpen);

  return (
    <>
      {menuOpen && <div className={styles.backdrop} onClick={() => setMenuOpen(v => !v)} />}

      <motion.header
        className={`${styles.header} ${menuOpen && styles.open}`}
        initial={false}
        animate={{ opacity: isScrolling ? 0.15 : 1 }}
        transition={{
          opacity: {
            duration: isScrolling ? 0.4 : 0.8,
            ease: 'easeInOut',
          },
        }}
        style={{ top: adOffset + 10 }}
      >
        <section className={styles.topRow}>
          <Logo />
          <HeaderNav />
          <MobileHeaderButton isOpen={menuOpen} onClick={() => setMenuOpen(v => !v)} tabIndex={0} />
        </section>

        <MobileDropBox isOpen={menuOpen} onClick={() => setMenuOpen(v => !v)} />
      </motion.header>
    </>
  );
}

export default Header;
