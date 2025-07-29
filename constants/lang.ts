import { en } from '@/assets/lang/en';
import { ko } from '@/assets/lang/ko';
import { LanguageOption, Locale, Messages } from '@/types';

const DEFAULT_LOCALE: Locale = 'ko';

const SUPPORTED_LOCALES: Locale[] = ['en'];

const LOOKUP: Record<Locale, Messages> = { en, ko };

const LANGUAGE_OPTIONS: LanguageOption[] = [
  { id: 1, value: 'en', label: 'English' },
  { id: 2, value: 'ko', label: '한국어' },
];

const LOCALE_COOKIE = 'lang';

export { SUPPORTED_LOCALES, LANGUAGE_OPTIONS, DEFAULT_LOCALE, LOCALE_COOKIE, LOOKUP };
