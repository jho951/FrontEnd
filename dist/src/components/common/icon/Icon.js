'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import dynamic from 'next/dynamic';
const icons = {
    sun: dynamic(() => import('@/asserts/sun.svg')),
    logo: dynamic(() => import('@/asserts/logo.svg')),
    moon: dynamic(() => import('@/asserts/moon.svg')),
    arrow: dynamic(() => import('@/asserts/arrow.svg')),
    rss: dynamic(() => import('@/asserts/rss.svg')),
    gitHub: dynamic(() => import('@/asserts/gitHub.svg')),
    globe: dynamic(() => import('@/asserts/globe.svg')),
};
export default function Icon({ name, size = 24, className, ...props }) {
    const SvgIcon = icons[name];
    if (!SvgIcon)
        return null;
    return (_jsx(SvgIcon, { width: size, height: size, className: className, "aria-hidden": "true", focusable: "false", ...props }));
}
