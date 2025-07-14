import { NextResponse } from 'next/server';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '@/constants';
function isLocale(x) {
    return SUPPORTED_LANGUAGES.includes(x);
}
export function middleware(req) {
    const url = req.nextUrl;
    const { pathname } = url;
    if (pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        /\.(?:png|jpg|jpeg|svg|css|js|ico|woff2?)$/.test(pathname)) {
        return NextResponse.next();
    }
    const segments = pathname.split('/').filter(Boolean);
    const len = segments.length;
    if (len === 0) {
        const cookieLang = req.cookies.get('lang')?.value;
        const locale = cookieLang && isLocale(cookieLang) ? cookieLang : DEFAULT_LANGUAGE;
        const to = url.clone();
        to.pathname = `/${locale}`;
        return NextResponse.redirect(to);
    }
    const first = segments[0]; 
    const last = segments[len - 1]; 

    if (isLocale(last)) {
        const rest = segments.slice(0, -1); 
        const internal = `/${last}` + (rest.length ? `/${rest.join('/')}` : '');
        const rewriteUrl = url.clone();
        rewriteUrl.pathname = internal; 
        return NextResponse.rewrite(rewriteUrl);
    }

    if (isLocale(first)) {
        return NextResponse.next();
    }

    const accept = req.headers.get('accept-language') ?? '';
    const browserLang = accept.split(',')[0].split('-')[0];
    const detected = isLocale(browserLang) ? browserLang : DEFAULT_LANGUAGE;
    const redirectUrl = url.clone();
    redirectUrl.pathname = `${pathname}/${detected}`;
    return NextResponse.redirect(redirectUrl);
}
export const config = {
    matcher: [
        '/((?!_next|api|favicon\\.ico|robots\\.txt|.*\\.(?:png|jpg|jpeg|svg|css|js|ico|woff2?)).*)',
    ],
};
