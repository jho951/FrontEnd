'use client';

import { useTheme } from '@/global/context/ThemeContext';

import SunIcon from '@/global/component/icon/SunIcon';
import MoonIcon from '@/global/component/icon/MoonIcon';

import styles from './ThemeButton.module.css';

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.toggleButton} onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
