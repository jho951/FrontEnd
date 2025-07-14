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
    const first = segments[0]; // e.g. 'edit' or 'ko'
    const last = segments[len - 1]; // e.g. 'ko' or 'edit'
    // 3) URL 맨 끝에 언어 코드가 붙어있으면 → 내부경로(`/lang/...`)로 rewrite
    if (isLocale(last)) {
        const rest = segments.slice(0, -1); // ['edit']
        const internal = `/${last}` + (rest.length ? `/${rest.join('/')}` : '');
        const rewriteUrl = url.clone();
        rewriteUrl.pathname = internal; // '/ko/edit'
        return NextResponse.rewrite(rewriteUrl);
    }
    // 4) URL 맨 앞에 언어 코드가 붙어있으면 → 정상 통과
    if (isLocale(first)) {
        return NextResponse.next();
    }
    // 5) 그 외 `/something` 같은 경로 → 뒤에 언어 코드 붙여 리디렉트
    //    예: /edit  → /edit/ko
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
