import type { Locale, Messages } from '../types';

import { en } from '../asserts/locales/en';
import { ko } from '../asserts/locales/ko';

const lookup: Record<Locale, Messages> = { en, ko };

export function getTranslation(locale: Locale): { common: Messages } {
  const messages = lookup[locale] ?? lookup['en'];
  return { common: messages };
}
