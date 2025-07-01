'use client';

import { motion } from 'framer-motion';

import styles from '@/button/hamburger/HamburgerButton.module.css';

interface HamburgerButtonProps {
  isOpen: boolean;
  size?: number;
  onClick: () => void;
}

export default function HamburgerButton({ isOpen, onClick, size = 32 }: HamburgerButtonProps) {
  const lineSpacing = size / 4;
  const lineHeight = 3;

  return (
    <motion.button
      className={styles.hamburger}
      onClick={onClick}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      type="button"
      style={{ width: size, height: size }}
    >
      <motion.span
        className={styles.line}
        style={{ top: lineSpacing - lineHeight / 2 }}
        animate={isOpen ? { rotate: 45, y: lineSpacing } : { rotate: 0, y: 0 }}
        transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
      />

      <motion.span
        className={styles.line}
        style={{ top: size / 2 - lineHeight / 2 }}
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
      />

      <motion.span
        className={styles.line}
        style={{ top: size - lineSpacing - lineHeight / 2 }}
        animate={isOpen ? { rotate: -45, y: -lineSpacing } : { rotate: 0, y: 0 }}
        transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
      />
    </motion.button>
  );
}
