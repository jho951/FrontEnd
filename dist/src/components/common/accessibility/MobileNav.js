import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '@/components/common/icon/Icon';
import DropdownAnimate from '@/components/common/animation/DropdownAnimate';
import { NAV_LINK } from '@/constants';
import styles from '@/styles/accessibility/MobileNav.module.css';
export default function MobileNav({ isOpen }) {
    const [openIndex, setOpenIndex] = useState(null);
    const toggle = (idx) => {
        setOpenIndex(prev => (prev === idx ? null : idx));
    };
    return (_jsx(AnimatePresence, { initial: false, children: isOpen && (_jsx(motion.nav, { className: styles.container, initial: { height: 0, opacity: 0 }, animate: { height: 'auto', opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { duration: 0.2, ease: 'easeOut' }, children: NAV_LINK.map((item, idx) => (_jsx("div", { className: styles.section, children: item.children ? (_jsxs(_Fragment, { children: [_jsxs("button", { className: styles.toggle, onClick: () => toggle(idx), "aria-expanded": openIndex === idx, "aria-controls": `mobile-submenu-${idx}`, "aria-haspopup": "true", children: [item.label, _jsx(Icon, { className: `${styles.icon} ${openIndex === idx ? styles.open : ''}`, name: "arrow", size: 20 })] }), _jsx(AnimatePresence, { initial: false, children: openIndex === idx && (_jsx(DropdownAnimate, { children: _jsx("ul", { id: `mobile-submenu-${idx}`, className: styles.dropdown, children: item.children.map(sub => (_jsx("li", { children: _jsx(Link, { href: sub.href, className: styles.link, children: sub.label }) }, sub.href))) }) })) })] })) : (_jsx(Link, { href: item.href ?? '#', className: styles.link, children: item.label })) }, item.id))) })) }));
}
