import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Icon from '@/components/common/icon/Icon';
import PcNav from '@/components/common/accessibility/PcNav';
import MobileNav from '@/components/common/accessibility/MobileNav';
import HamburgerButton from '@/components/common/button/HamburgerButton';
import { useScrollY, useScrollDetect, useScrollLock } from '@/hooks';
import styles from '@/styles/header/Header.module.css';
function Header({ adOffset }) {
    const scrollY = useScrollY();
    const isSticky = scrollY > adOffset;
    const [menuOpen, setMenuOpen] = useState(false);
    const isScrolling = useScrollDetect(100);
    useScrollLock(menuOpen);
    return (_jsxs(_Fragment, { children: [menuOpen && _jsx("div", { className: styles.backdrop, onClick: () => setMenuOpen(v => !v) }), _jsxs(motion.header, { className: `${styles.header} ${menuOpen && styles.open}`, initial: false, animate: { opacity: isScrolling ? 0.15 : 1 }, transition: { opacity: { duration: isScrolling ? 0.4 : 0.8, ease: 'easeInOut' } }, style: {
                    position: isSticky ? 'fixed' : 'absolute',
                    boxShadow: isSticky ? '0 2px 8px rgba(0, 0, 0, 0.08)' : 'none',
                    top: isSticky ? 0 : adOffset + 10,
                }, children: [_jsxs("section", { className: styles.topRow, children: [_jsx("h1", { children: _jsxs(Link, { className: styles.logoContainer, href: "/", "aria-label": "\uD648\uC73C\uB85C \uC774\uB3D9", children: [_jsx(Icon, { name: "logo", size: 44 }), _jsx("span", { className: "sr-only", children: "Skill Blog" })] }) }), _jsx(PcNav, {}), _jsx("div", { className: styles.btnContainer, children: _jsx(HamburgerButton, { isOpen: menuOpen, size: 24, onClick: () => setMenuOpen(v => !v), tabIndex: 0 }) })] }), _jsx(MobileNav, { isOpen: menuOpen, onClick: () => setMenuOpen(v => !v) })] })] }));
}
export default Header;
