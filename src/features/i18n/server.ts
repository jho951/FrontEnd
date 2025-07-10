import 'server-only';
import { Locale } from '../../../i18n-config';

export const getTranslation = async (locale: Locale) => {
  switch (locale) {
    case 'en':
      return {
        common: (await import('./locales/en/common.json')).default,
      };
    case 'ko':
      return {
        common: (await import('./locales/ko/common.json')).default,
      };
    default:
      throw new Error(`Unsupported locale: ${locale}`);
  }
};
