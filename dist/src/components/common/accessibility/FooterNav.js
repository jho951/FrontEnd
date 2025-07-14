import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
import styles from '@/styles/accessibility/FooterNav.module.css';
export default function FooterNav({ title, links }) {
    return (_jsxs("div", { children: [_jsx("h3", { className: styles.columnTitle, children: title }), _jsx("ul", { className: styles.linkList, children: links.map(link => {
                    const key = `${link.label}-${link.href}`;
                    return (_jsx("li", { children: _jsx(Link, { href: link.href, target: link.target, rel: link.target === '_blank' ? 'noopener noreferrer' : undefined, className: styles.link, children: link.label }) }, key));
                }) })] }));
}
