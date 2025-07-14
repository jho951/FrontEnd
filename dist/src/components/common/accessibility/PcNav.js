import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LinkButton from '@/components/common/button/LinkButton';
import { NAV_LINK, NOT_AUTH_LINK } from '@/constants';
import styles from '@/styles/accessibility/PcNav.module.css';
export default function PcNav() {
    const pathname = usePathname();
    const [focusedIndex, setFocusedIndex] = useState(null);
    const itemRefs = useRef([]);
    useEffect(() => {
        if (focusedIndex !== null) {
            itemRefs.current[focusedIndex]?.focus();
        }
    }, [focusedIndex]);
    return (_jsxs("nav", { className: styles.container, role: "navigation", "aria-label": "\uC8FC\uC694 \uC0AC\uC774\uD2B8 \uB0B4\uBE44\uAC8C\uC774\uC158", children: [_jsx("ul", { role: "menubar", className: `${styles.navList} focusable`, children: NAV_LINK.map((item, idx) => (_jsxs("li", { role: "none", className: styles.navItem, children: [_jsx(LinkButton, { href: item.href, variant: "text", className: styles.link, role: "menuitem", tabIndex: 0, onFocus: () => setFocusedIndex(idx), "aria-current": pathname === item.href ? 'page' : undefined, children: item.label }), item.children && (_jsx("ul", { role: "menu", className: styles.submenu, children: item.children.map(child => (_jsx("li", { role: "none", children: _jsx(LinkButton, { href: child.href, variant: "text", className: styles.subLink, role: "menuitem", tabIndex: 0, "aria-current": pathname === child.href ? 'page' : undefined, children: child.label }) }, child.href))) }))] }, item.id))) }), _jsx("span", { className: styles.space, "aria-hidden": true }), _jsx("ul", { role: "menubar", className: styles.authList, children: NOT_AUTH_LINK.map((item, idx) => {
                    const actualIdx = NAV_LINK.length + idx;
                    return (_jsx("li", { role: "none", children: _jsx(LinkButton, { href: item.href, variant: "text", className: styles.link, role: "menuitem", tabIndex: 0, onFocus: () => setFocusedIndex(actualIdx), "aria-current": pathname === item.href ? 'page' : undefined, children: item.label }) }, item.id));
                }) })] }));
}
