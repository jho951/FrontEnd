'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import styles from '@/styles/button/HamburgerButton.module.css';
export default function HamburgerButton({ isOpen, onClick, size = 30, tabIndex, }) {
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
    return (_jsx(motion.button, { className: `${styles.container} focusable`, onClick: onClick, "aria-label": "Toggle menu", "aria-expanded": isOpen, tabIndex: tabIndex, type: "button", style: { width: size, height: size }, children: lines.map((line, index) => (_jsx(motion.span, { className: styles.line, style: { top: line.top }, animate: line.animate, transition: { type: 'tween', duration: 0.4, ease: 'easeInOut' } }, index))) }));
}
