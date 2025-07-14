// middleware.ts
import { NextResponse } from 'next/server';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/constants';
function isLocale(value) {
    return SUPPORTED_LOCALES.includes(value);
}
export function middleware(req) {
    const { pathname } = req.nextUrl;
    // ✅ 정적 리소스는 무시
    if (pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/favicon.ico') ||
        pathname.startsWith('/robots.txt') ||
        pathname.startsWith('/manifest.webmanifest') ||
        pathname.startsWith('/android-chrome') ||
        pathname.startsWith('/apple-touch-icon') ||
        pathname.startsWith('/.well-known')) {
        return NextResponse.next();
    }
    const pathSegments = pathname.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];
    if (isLocale(firstSegment)) {
        return NextResponse.next();
    }
    const acceptLang = req.headers.get('accept-language');
    const rawLocale = acceptLang?.split(',')?.[0]?.split('-')?.[0] ?? DEFAULT_LOCALE;
    const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
    const newUrl = new URL(`/${locale}${pathname}`, req.url);
    return NextResponse.redirect(newUrl);
}
export const config = {
    matcher: [
        '/((?!_next|favicon.ico|robots.txt|manifest.webmanifest|android-chrome|apple-touch-icon|.well-known).*)',
    ],
};
