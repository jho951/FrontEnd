'use client';

import Icon from '@/icon/component/Icon';

import { useTheme } from '@/global/context/ThemeContext';

import styles from '@/button/style/ThemeButton.module.css';

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.toggleButton} onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'dark' ? <Icon name="sun" /> : <Icon name="moon" />}
    </button>
  );
}
