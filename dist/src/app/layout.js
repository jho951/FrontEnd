import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import RssScript from '@/scripts/RssScript';
import AdsenseScript from '@/scripts/AdsenseScript';
import { siteMetadata } from '@/libs/metadata';
import { siteViewport } from '@/libs/viewport';
import '@/styles/theme.css';
import '@/styles/reset.css';
import '@/styles/global.css';
export const metadata = siteMetadata;
export const viewport = siteViewport;
export default function RootLayout({ children }) {
    return (_jsxs("html", { lang: "en", suppressHydrationWarning: true, children: [_jsxs("head", { children: [_jsx(RssScript, {}), _jsx(AdsenseScript, {})] }), _jsx("body", { children: children })] }));
}
