import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'ko'];
const defaultLocale = 'en';

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (locales.some(locale => pathname.startsWith(`/${locale}`))) {
    return;
  }

  const locale = defaultLocale;
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|.*\\..*).*)'],
};
