import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/common/icon/Icon';
import Select from '@/components/common/select/Select';
import { COPY, LANGUAGE_OPTIONS, SNS_LINK } from '@/constants';
import styles from '@/styles/accessibility/FooterSns.module.css';
export default function FooterSns() {
    const [language, setLanguage] = useState('English');
    return (_jsxs("div", { className: styles.bottom, children: [_jsx("p", { className: styles.copy, children: COPY }), _jsxs("div", { className: styles.languageAndIcons, children: [_jsx(Select, { options: LANGUAGE_OPTIONS, value: language, onChange: setLanguage, placeholder: _jsxs("p", { className: styles.languageText, children: [_jsx(Icon, { className: styles.globe, name: "globe", size: 20 }), " ", _jsx("span", { children: "language" })] }), renderOptionLabel: opt => _jsx("span", { children: opt.label }) }), _jsx("div", { className: styles.icons, children: SNS_LINK.map(({ name, href, icon, external = false }) => external ? (_jsx(Link, { href: href, target: "_blank", rel: "noopener noreferrer", "aria-label": name, children: _jsx(Icon, { name: icon, size: 30 }) }, name)) : (_jsx(Link, { href: href, "aria-label": name, children: _jsx(Icon, { name: icon, size: 30 }) }, name))) })] })] }));
}
