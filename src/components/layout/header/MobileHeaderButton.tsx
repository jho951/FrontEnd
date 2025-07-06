'use client';

import HamburgerButton from '@/components/common/button/HamburgerButton';

import styles from '@/styles/header/MobileHeaderButton.module.css';

import type { HamburgerButtonProps } from '@/types';

export default function MobileHeaderButton({ tabIndex, isOpen, onClick }: HamburgerButtonProps) {
  return (
    <div className={styles.container}>
      <HamburgerButton isOpen={isOpen} size={20} onClick={onClick} tabIndex={tabIndex} />
    </div>
  );
}
