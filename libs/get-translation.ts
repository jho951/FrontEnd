import { en } from '@/assets/locales/en';
import { ko } from '@/assets/locales/ko';

import type { Locale, Messages } from '@/types';

const lookup: Record<Locale, Messages> = { en, ko };

export function getTranslation(locale: Locale): { common: Messages } {
  const messages = lookup[locale] ?? lookup['en'];
  return { common: messages };
}
