import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Icon from '@/components/common/icon/Icon';
import PcNav from '@/components/common/accessibility/PcNav';
import MobileNav from '@/components/common/accessibility/MobileNav';
import HamburgerButton from '@/components/common/button/HamburgerButton';

import { useScrollY, useScrollDetect, useScrollLock } from '@/hooks';

import type { HeaderProps } from '@/types';

import styles from '@/styles/header/Header.module.css';

function Header({ adOffset }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScrollY();
  const isSticky = scrollY > adOffset;

  const isScrolling = useScrollDetect(100);
  useScrollLock(menuOpen);

  return (
    <>
      {menuOpen && <div className={styles.backdrop} onClick={() => setMenuOpen(v => !v)} />}

      <motion.header
        className={`${styles.header} ${menuOpen && styles.open}`}
        initial={false}
        animate={{ opacity: isScrolling ? 0.15 : 1 }}
        transition={{ opacity: { duration: isScrolling ? 0.4 : 0.8, ease: 'easeInOut' } }}
        style={{
          position: isSticky ? 'fixed' : 'absolute',
          boxShadow: isSticky ? '0 2px 8px rgba(0, 0, 0, 0.08)' : 'none',
          top: isSticky ? 0 : adOffset + 10,
        }}
      >
        <section className={styles.topRow}>
          <h1>
            <Link className={styles.logoContainer} href="/" aria-label="홈으로 이동">
              <Icon name="logo" size={44} />
              <span className="sr-only">Skill Blog</span>
            </Link>
          </h1>
          <PcNav />
          <div className={styles.btnContainer}>
            <HamburgerButton
              isOpen={menuOpen}
              size={24}
              onClick={() => setMenuOpen(v => !v)}
              tabIndex={0}
            />
          </div>
        </section>

        <MobileNav isOpen={menuOpen} onClick={() => setMenuOpen(v => !v)} />
      </motion.header>
    </>
  );
}

export default Header;
