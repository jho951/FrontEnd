'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from '@/components/common/icon/Icon';
import { useTheme } from '@/context/ThemeContext';
import styles from '@/styles/button/ThemeButton.module.css';
export default function ThemeButton() {
    const { theme, toggleTheme } = useTheme();
    return (_jsx("button", { className: `${styles.toggleButton} focusable`, onClick: toggleTheme, "aria-label": "Toggle theme", children: theme === 'dark' ? _jsx(Icon, { name: "sun" }) : _jsx(Icon, { name: "moon" }) }));
}
