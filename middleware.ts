// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { LOCALE_COOKIE, SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/constants';
import type { Locale } from '@/types';

function isLocale(x: string): x is Locale {
  return SUPPORTED_LOCALES.includes(x as Locale);
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  // 정적 리소스 통과
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    /\.(png|jpe?g|svg|css|js|ico|woff2?|map)$/.test(pathname)
  )
    return NextResponse.next();

  // /ko 또는 /ko/* → / 로 리디렉션
  if (firstSegment === DEFAULT_LOCALE) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // / → 쿠키만 설정
  if (pathname === '/') {
    const res = NextResponse.next();
    res.cookies.set(LOCALE_COOKIE, DEFAULT_LOCALE, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
      sameSite: 'lax',
    });
    return res;
  }

  // 다국어 경로 → 쿠키 설정
  if (isLocale(firstSegment)) {
    const res = NextResponse.next();
    res.cookies.set(LOCALE_COOKIE, firstSegment, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
      sameSite: 'lax',
    });
    return res;
  }

  return NextResponse.next();
}
