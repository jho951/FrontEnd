import { NextRequest } from 'next/server';
import { locales, defaultLocale } from './i18n-config';

export function detectLocale(request: NextRequest): string {
  const acceptLang = request.headers.get('accept-language');
  const lang = acceptLang?.split(',')[0].split('-')[0];

  return locales.includes(lang as any) ? lang! : defaultLocale;
}
