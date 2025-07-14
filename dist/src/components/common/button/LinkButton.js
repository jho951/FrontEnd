'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import NextLink from 'next/link';
import { useTranslation } from '@/context/TranslationContext';
import styles from '@/styles/button/Button.module.css';
const LinkButton = forwardRef(function LinkButton({ href, variant = 'primary', size = 'md', isLoading = false, leftIcon, rightIcon, children, className = '', prefetch = true, 'aria-label': ariaLabel, ...rest }, ref) {
    const { locale } = useTranslation();
    const normalized = href.endsWith(`/${locale}`) ? href : `${href.replace(/\/$/, '')}/${locale}`;
    const classNames = [
        styles.button,
        styles[variant],
        styles[size],
        isLoading ? styles.loading : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return (_jsx(NextLink, { href: normalized, prefetch: prefetch, className: `${classNames} focusable`, "aria-label": ariaLabel, "aria-disabled": isLoading, tabIndex: isLoading ? -1 : 0, ref: ref, ...rest, children: isLoading ? (_jsx("span", { className: styles.spinner })) : (_jsxs(_Fragment, { children: [leftIcon && _jsx("span", { className: styles.icon, children: leftIcon }), _jsx("span", { children: children }), rightIcon && _jsx("span", { className: styles.icon, children: rightIcon })] })) }));
});
LinkButton.displayName = 'LinkButton';
export default LinkButton;
