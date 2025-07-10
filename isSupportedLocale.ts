import { locales } from './i18n-config';

export function isSupportedLocale(val: string): val is 'ko' | 'en' {
  return locales.includes(val as any);
}
