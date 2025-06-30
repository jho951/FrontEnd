'use client';

import { useEffect, useState } from 'react';
import useDarkMode from '@/util/useDarkMode';
import styles from './ThemeButton.module.css';

export default function ThemeButton() {
  const { theme, toggleTheme } = useDarkMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button className={styles.toggleButton} onClick={toggleTheme} aria-label="Toggle theme">
      <span className={styles.icon} role="img" aria-hidden="true">
        {theme === 'dark' ? '☀️' : '🌙'}
      </span>
    </button>
  );
}
