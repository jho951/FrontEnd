import { NextRequest, NextResponse } from 'next/server';
import { locales } from './i18n-config';
import { detectLocale } from './detectLocale';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split('/').filter(Boolean);

  // ✅ 1. 루트 경로면 → 감지된 locale로 리디렉션
  if (pathname === '/') {
    const locale = detectLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  // ✅ 2. 마지막 segment가 이미 locale이면 그대로 진행
  const last = segments[segments.length - 1];
  const isLocale = locales.includes(last as any);
  if (isLocale) {
    return NextResponse.next();
  }

  // ✅ 3. 그 외엔 → suffix로 locale 붙여서 리디렉션
  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `${pathname.replace(/\/$/, '')}/${locale}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/', '/edit', '/edit/', '/post/:path*', '/about'],
};
