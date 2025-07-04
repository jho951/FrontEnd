'use client';

import HamburgerButton from '@/button/hamburger/HamburgerButton';
import { HeaderMenuOpenProps } from '@/header/type/HeaderType';

import styles from '@/header/style/MobileHeaderButton.module.css';

export default function MobileHeaderButton({ isOpen, onClick }: HeaderMenuOpenProps) {
  return (
    <div className={styles.container}>
      <HamburgerButton isOpen={isOpen} size={20} onClick={onClick} />
    </div>
  );
}
