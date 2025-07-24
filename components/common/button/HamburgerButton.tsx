'use client';

import { HamburgerButtonProps } from '@/types';
import styles from '@/styles/button/HamburgerButton.module.css';

export default function HamburgerButton({
  isOpen,
  onClick,
  size = 24,
  tabIndex,
}: HamburgerButtonProps) {
  return (
    <button
      className={`${styles.container} ${isOpen ? styles.open : ''}`}
      onClick={onClick}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      tabIndex={tabIndex}
      type="button"
      style={{ width: size, height: size }}
    >
      <span className={styles.line} />
      <span className={styles.line} />
      <span className={styles.line} />
    </button>
  );
}
