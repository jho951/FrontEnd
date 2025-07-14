'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/button/Button.module.css';
const Button = forwardRef(function Button({ variant = 'primary', size = 'md', isLoading = false, leftIcon, rightIcon, children, className = '', ...rest }, ref) {
    const classNames = `${styles.button} ${styles[variant]} ${styles[size]} ${isLoading ? styles.loading : ''} ${className}`;
    return (_jsx(motion.button, { ref: ref, className: `${classNames.trim()}focusable`, disabled: isLoading || rest.disabled, whileTap: { scale: 0.95 }, whileHover: { scale: 1.02 }, initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { type: 'spring', stiffness: 200, damping: 18 }, ...rest, children: isLoading ? (_jsx("span", { className: styles.spinner })) : (_jsxs(_Fragment, { children: [leftIcon && _jsx("span", { className: styles.icon, children: leftIcon }), _jsx("span", { children: children }), rightIcon && _jsx("span", { className: styles.icon, children: rightIcon })] })) }));
});
Button.displayName = 'Button';
export default Button;
