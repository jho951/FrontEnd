'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/select/Select.module.css';
export default function Select({ options, value, onChange, className = '', placeholder = 'Select', renderOptionLabel, }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const toggle = () => setOpen(prev => !prev);
    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const selectedOption = options.find(o => o.value === value);
    return (_jsxs("div", { className: `${styles.wrapper} ${className}`, ref: ref, children: [_jsx("button", { className: styles.trigger, onClick: toggle, "aria-haspopup": "listbox", "aria-expanded": open, type: "button", children: selectedOption?.label || placeholder }), open && (_jsx("ul", { className: styles.dropdown, role: "listbox", children: options.map(option => (_jsx("li", { className: styles.option, onClick: () => {
                        onChange(option.value);
                        setOpen(false);
                    }, role: "option", "aria-selected": option.value === value, children: renderOptionLabel ? renderOptionLabel(option) : option.label }, option.value))) }))] }));
}
