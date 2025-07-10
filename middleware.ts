import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales } from './i18n-config';

const PUBLIC_FILE = /\.(.*)$/;

function detectLocale(request: NextRequest): string {
  const accept = request.headers.get('accept-language');
  const lang = accept?.split(',')[0].split('-')[0];
  return locales.includes(lang as any) ? lang! : defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/_next') || pathname.includes('/api/') || PUBLIC_FILE.test(pathname)) {
    return NextResponse.next();
  }

  const pathnameLocale = pathname.split('/')[1];
  if (locales.includes(pathnameLocale as any)) {
    return NextResponse.next();
  }

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'],
};
