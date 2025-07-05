'use client';

import { motion } from 'framer-motion';
import { HamburgerButtonProps } from '@/button/type/HamburgerButtonProps';

import styles from '@/button/style/HamburgerButton.module.css';

export default function HamburgerButton({ isOpen, onClick, size = 30 }: HamburgerButtonProps) {
  const lineHeight = 3;
  const spacing = size / 4;

  const lines = [
    {
      top: spacing - lineHeight / 2,
      animate: isOpen ? { rotate: 45, y: spacing } : { rotate: 0, y: 0 },
    },
    {
      top: size / 2 - lineHeight / 2,
      animate: isOpen ? { opacity: 0 } : { opacity: 1 },
    },
    {
      top: size - spacing - lineHeight / 2,
      animate: isOpen ? { rotate: -45, y: -spacing } : { rotate: 0, y: 0 },
    },
  ];

  return (
    <motion.button
      className={styles.container}
      onClick={onClick}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      type="button"
      style={{ width: size, height: size }}
    >
      {lines.map((line, index) => (
        <motion.span
          key={index}
          className={styles.line}
          style={{ top: line.top }}
          animate={line.animate}
          transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
        />
      ))}
    </motion.button>
  );
}
