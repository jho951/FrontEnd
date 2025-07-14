'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function HomePage({ locale }) {
    return (_jsxs("main", { children: [_jsx("h1", { children: locale === 'ko' ? '홈페이지' : 'Home Page' }), _jsx("p", { children: locale === 'ko' ? '어서 오세요!' : 'Welcome!' })] }));
}
