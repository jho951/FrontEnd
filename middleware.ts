import { NextRequest, NextResponse } from 'next/server';
import { LOCALE_COOKIE, SUPPORTED_LOCALES } from '@/constants';
import type { Locale } from '@/types';

function isLocale(x: string): x is Locale {
  return SUPPORTED_LOCALES.includes(x as Locale);
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    /\.(png|jpg|jpeg|svg|css|js|ico|woff2?|map)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (!isLocale(firstSegment)) {
    return NextResponse.next();
  }

  const res = NextResponse.next();
  res.cookies.set(LOCALE_COOKIE, firstSegment, {
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    sameSite: 'lax',
  });
  return res;
}
