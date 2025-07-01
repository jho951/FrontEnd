'use client';

import HamburgerButton from '@/button/hamburger/HamburgerButton';
import styles from '@/header/style/HeaderActions.module.css';

interface HeaderActionsProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HeaderActions({ menuOpen, setMenuOpen }: HeaderActionsProps) {
  return (
    <div className={styles.hamburger}>
      <HamburgerButton isOpen={menuOpen} size={32} onClick={() => setMenuOpen(v => !v)} />
    </div>
  );
}
