import { cookies, headers } from 'next/headers';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@/constants';
import type { Locale } from '@/types';

export async function getServerCurrentLanguage(): Promise<Locale> {
  // 1. 쿠키 우선
  const cookieLang = (await cookies()).get('lang')?.value;
  if (cookieLang && SUPPORTED_LOCALES.includes(cookieLang as Locale)) {
    return cookieLang as Locale;
  }

  // 2. URL 기반 추출
  const hdrs = headers();
  const rawUrl = (await hdrs).get('x-middleware-path') ?? (await hdrs).get('referer') ?? '/';

  const pathname = new URL(rawUrl, 'http://dummy.local').pathname;
  const firstSegment = pathname.split('/')[1];
  if (firstSegment && SUPPORTED_LOCALES.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }

  // 3. 기본 fallback
  return DEFAULT_LOCALE;
}
