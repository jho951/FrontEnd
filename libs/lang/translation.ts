import { en } from '@/assets/lang/en';
import { ko } from '@/assets/lang/ko';

import type { Locale, Messages } from '@/types';

const lookup: Record<Locale, Messages> = { en, ko };

export function getTranslation(locale: Locale): { common: Messages } {
  const messages = lookup[locale] ?? lookup['en'];
  return { common: messages };
}
