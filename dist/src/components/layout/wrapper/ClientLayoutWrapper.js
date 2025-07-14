'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { usePathname } from 'next/navigation';
import { HEADER_EXCLUDED_PATHS, FOOTER_EXCLUDED_PATHS } from '@/constants/link';
import Footer from '@/components/layout/footer/Footer';
import SkipNav from '@/components/common/accessibility/SkipNav';
import HeaderWrapper from '@/components/layout/wrapper/HeaderWrapper';
export function ClientLayoutWrapper({ children }) {
    const pathname = usePathname();
    const shouldRenderHeader = !HEADER_EXCLUDED_PATHS.some(path => pathname.startsWith(path));
    const shouldRenderFooter = !FOOTER_EXCLUDED_PATHS.some(path => pathname.startsWith(path));
    return (_jsxs(_Fragment, { children: [_jsx(SkipNav, {}), shouldRenderHeader && _jsx(HeaderWrapper, {}), children, shouldRenderFooter && _jsx(Footer, {})] }));
}
