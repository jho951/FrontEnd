import { useState } from 'react';

import Logo from '@/components/layout/header/Logo';
import PcNav from '@/components/layout/header/PcNav';
import MobileNav from '@/components/layout/header/MobileNav';
import HamburgerButton from '@/components/common/button/HamburgerButton';

import { GNB } from '@/constants';
import { useScrollLock } from '@/hooks/useScroll';

import styles from '@/styles/header/Header.module.css';
import { HeaderProps } from '@/types';

export default function Header({ pathname }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useScrollLock(menuOpen);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <>
      {menuOpen && <div className="backdrop" onClick={toggleMenu} />}

      <header className={`${styles.header} ${menuOpen ? styles.headerOpen : ''}`}>
        <div className={styles.topRow}>
          <Logo pathname={pathname} onClick={() => setMenuOpen(false)} />

          <PcNav gnb={GNB} pathname={pathname} />

          <div className={styles.btnContainer}>
            <HamburgerButton isOpen={menuOpen} size={18} onClick={toggleMenu} />
          </div>
        </div>
        <MobileNav gnb={GNB} pathname={pathname} isOpen={menuOpen} onClick={toggleMenu} />
      </header>
    </>
  );
}
