import { NextRequest, NextResponse } from 'next/server';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '@/constants';
import type { Locale } from '@/types';

const LOCALE_COOKIE = 'lang';

function isLocale(x: string): x is Locale {
  return SUPPORTED_LANGUAGES.includes(x as Locale);
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const segments = pathname.split('/').filter(Boolean);

  // ✅ 정적 파일 및 API 경로 무시
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    /\.(?:png|jpg|jpeg|svg|css|js|ico|woff2?|map)$/.test(pathname)
  ) {
    return NextResponse.next();
  }
  const firstSegment = segments[0];

  // ✅ 1. locale이 URL에 있는 경우 → 쿠키 저장 + 통과
  if (isLocale(firstSegment)) {
    const res = NextResponse.next();
    res.cookies.set(LOCALE_COOKIE, firstSegment, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30일
      sameSite: 'lax',
    });
    return res;
  }

  // ✅ 2. locale이 URL에 없는 경우 → 쿠키 또는 브라우저 감지로 locale 결정 후 redirect
  const cookieLang = req.cookies.get(LOCALE_COOKIE)?.value;
  const headerLang = req.headers.get('accept-language') ?? '';
  const browserLang = headerLang.split(',')[0].split('-')[0];

  const detectedLang: Locale =
    cookieLang && isLocale(cookieLang)
      ? cookieLang
      : isLocale(browserLang)
        ? browserLang
        : DEFAULT_LANGUAGE;

  const redirectUrl = req.nextUrl.clone();
  redirectUrl.pathname = `/${detectedLang}${pathname}`;

  const res = NextResponse.redirect(redirectUrl);
  res.cookies.set(LOCALE_COOKIE, detectedLang, {
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    sameSite: 'lax',
  });
  return res;
}

export const config = {
  matcher: ['/', '/:path*'],
};
