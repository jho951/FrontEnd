'use client';

import { useTheme } from '@/context/ThemeContext';

import SunIcon from '@/component/icon/SunIcon';
import MoonIcon from '@/component/icon/MoonIcon';

import styles from './ThemeButton.module.css';

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.toggleButton} onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
