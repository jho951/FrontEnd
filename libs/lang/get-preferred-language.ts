import { NextRequest } from 'next/server';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@/constants';
import type { Locale } from '@/types';

export function getPreferredLanguage(request: NextRequest): Locale {
  const header = request.headers.get('accept-language') ?? '';
  const langs = header.split(',').map(l => l.split(';')[0]);

  for (const lang of langs) {
    const short = lang.slice(0, 2).toLowerCase();
    if (SUPPORTED_LOCALES.includes(short as Locale)) {
      return short as Locale;
    }
  }
  return DEFAULT_LOCALE;
}
