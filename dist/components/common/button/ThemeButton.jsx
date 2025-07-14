'use client';
import Icon from '../icon/Icon';
import { useTheme } from '../../../context/ThemeContext';
import styles from '@/styles/button/ThemeButton.module.css';
export default function ThemeButton() {
    const { theme, toggleTheme } = useTheme();
    return (<button className={`${styles.toggleButton} focusable`} onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'dark' ? <Icon name="sun"/> : <Icon name="moon"/>}
    </button>);
}
