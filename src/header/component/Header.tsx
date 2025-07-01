'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

import useBodyScrollLock from '@/global/util/useBodyScrollLock';

import HeaderNav from '@/header/component/HeaderNav';
import MobileMenu from '@/header/component/MobileMenu';
import HeaderActions from '@/header/component/HeaderActions';
import { useScrollDirection } from '@/header/util/useScrollDirection';

import styles from '@/header/style/Header.module.css';

import Logo from '@/global/component/logo/Logo';

export default function Header() {
  const controls = useAnimation();
  const scrollState = useScrollDirection();

  const [menuOpen, setMenuOpen] = useState(false);

  useBodyScrollLock(menuOpen);

  useEffect(() => {
    if (scrollState.hidden) {
      controls.start({
        y: -80,
        opacity: 0,
        transition: { duration: 0.3 },
      });
    } else {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 120, damping: 20, duration: 0.3 },
      });
    }
  }, [scrollState.hidden, controls]);

  return (
    <>
      <motion.header
        className={clsx(styles.header, {
          [styles.scrolled]: scrollState.scrolled,
        })}
        initial={false}
        animate={controls}
      >
        <Logo />
        <HeaderNav />
        <HeaderActions menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </motion.header>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
