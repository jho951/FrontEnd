import { LANGUAGE_LIST } from '@/constants';

export type SupportedLanguage = (typeof LANGUAGE_LIST)[number]['value'];

export type LanguageOption = {
  value: string;
  label: string;
};
