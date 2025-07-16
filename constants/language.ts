import { LanguageOption } from '@/types';

export const DEFAULT_LANGUAGE = 'ko';

export const LANGUAGE_LIST: LanguageOption[] = [
  { value: 'en', label: 'English' },
  { value: 'ko', label: '한국어' },
];

export const SUPPORTED_LANGUAGES = LANGUAGE_LIST.map(language => language.value);
