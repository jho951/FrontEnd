import { LanguageOption, Locale } from '@/types';

const DEFAULT_LANGUAGE: Locale = 'ko';

const SUPPORTED_LOCALES: Locale[] = ['en', 'ko'];

const LANGUAGE_OPTIONS: LanguageOption[] = [
  { id: 1, value: 'en', label: 'English' },
  { id: 2, value: 'ko', label: '한국어' },
];

const LOCALE_COOKIE = 'lang';

export { SUPPORTED_LOCALES, LANGUAGE_OPTIONS, DEFAULT_LANGUAGE, LOCALE_COOKIE };
