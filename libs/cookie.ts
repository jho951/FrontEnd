import { Locale } from '@/types';

/**
 * 언어(locale) 정보를 쿠키에 저장합니다.
 * 저장 위치는 `lang`이라는 쿠키 키이며, 30일 동안 유효합니다.
 *
 * @param {Locale} locale - 저장할 언어 코드 (예: 'en', 'ko')
 *
 * @example
 * setLanguageCookie('en');
 */
function setLanguageCookie(locale: Locale) {
  const encoded = encodeURIComponent(locale);
  document.cookie = `lang=${encoded}; path=/; max-age=2592000; SameSite=Lax`;
}

/**
 * 쿠키에서 언어(locale) 정보를 가져옵니다.
 *
 * @returns {Locale | null} 쿠키에 저장된 언어 코드, 없으면 null
 *
 * @example
 * const lang = getLanguageCookie(); // 'en' 또는 null
 */
function getLanguageCookie(): Locale | null {
  const raw =
    (typeof document !== 'undefined' &&
      document.cookie
        .split('; ')
        .find(row => row.startsWith('lang='))
        ?.split('=')[1]) ??
    null;

  if (raw && ['en', 'ko', 'ja'].includes(raw)) {
    return raw as Locale;
  }
  return null;
}

/**
 * 저장된 언어(locale) 쿠키를 삭제합니다.
 *
 * @example
 * deleteLanguageCookie();
 */
function deleteLanguageCookie(): void {
  document.cookie = `lang=; path=/; max-age=0; SameSite=Lax`;
}

export { setLanguageCookie, getLanguageCookie, deleteLanguageCookie };
