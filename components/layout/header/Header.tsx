import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import Icon from '@/components/common/icon/Icon';
import PcNav from '@/components/layout/header/PcNav';
import MobileNav from '@/components/layout/header/MobileNav';
import HamburgerButton from '@/components/common/button/HamburgerButton';

import { useScrollLock } from '@/hooks/useScroll';

import styles from '@/styles/header/Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  useScrollLock(menuOpen);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <>
      {menuOpen && <div className="backdrop" onClick={toggleMenu} />}

      <header className={`${styles.header} ${menuOpen ? styles.headerOpen : ''}`}>
        <div className={styles.topRow}>
          <Link
            className={styles.logoContainer}
            href="/"
            aria-label="홈으로 이동"
            aria-current={pathname === '/' ? 'page' : undefined}
            onClick={() => setMenuOpen(false)}
          >
            <Icon name="logo" size={44} />
            <h1 className="sr-only">Skill Blog</h1>
          </Link>

          <PcNav />

          <div className={styles.btnContainer}>
            <HamburgerButton isOpen={menuOpen} size={18} onClick={toggleMenu} tabIndex={0} />
          </div>
        </div>
        <MobileNav isOpen={menuOpen} onClick={toggleMenu} />
      </header>
    </>
  );
}
