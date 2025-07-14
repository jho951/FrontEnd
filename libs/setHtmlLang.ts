import type { Locale } from '@/types';

export function setHtmlLang(lang: Locale) {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lang;
  }
}
