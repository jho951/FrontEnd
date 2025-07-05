'use client';

import { HeaderMenuOpenProps } from '@/header/type/HeaderType';

import HamburgerButton from '@/button/component/HamburgerButton';

import styles from '@/header/style/MobileHeaderButton.module.css';

export default function MobileHeaderButton({ isOpen, onClick }: HeaderMenuOpenProps) {
  return (
    <div className={styles.container}>
      <HamburgerButton isOpen={isOpen} size={20} onClick={onClick} />
    </div>
  );
}
