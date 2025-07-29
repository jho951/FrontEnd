import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

import acceptLanguage from 'accept-language';

import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@/constants';
import { Locale } from '@/types';

// 초기화: 사용할 언어 목록 지정
acceptLanguage.languages(SUPPORTED_LOCALES);

/**
 * 쿠키에서 값을 가져옵니다 (서버 컴포넌트용).
 */
export async function getCookieValue(key: string): Promise<string | null> {
  return (await cookies()).get(key)?.value ?? null;
}

/**
 * 쿠키를 설정합니다 (서버 컴포넌트용).
 */
export async function setCookieValue(
  key: string,
  value: string,
  options: { path?: string } = { path: '/' },
): Promise<void> {
  (await cookies()).set(key, value, options);
}

/**
 * 서버 요청 객체에서 쿠키를 가져옵니다 (미들웨어 등에서 사용).
 */
export function getCookieFromRequest(req: NextRequest, key: string): string | null {
  return req.cookies.get(key)?.value ?? null;
}

/**
 * 서버 요청에서 언어를 추론합니다.
 */
export function detectLocaleFromRequest(req: NextRequest): Locale {
  const cookieLang = getCookieFromRequest(req, 'lang');
  if (cookieLang && SUPPORTED_LOCALES.includes(cookieLang as Locale)) {
    return cookieLang as Locale;
  }

  const headerLang = acceptLanguage.get(req.headers.get('accept-language') || '');
  return (headerLang as Locale) || DEFAULT_LOCALE;
}
