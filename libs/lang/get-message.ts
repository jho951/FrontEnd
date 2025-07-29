import { LOOKUP } from '@/constants';
import type { Locale, Messages } from '@/types';

export function getMessages(locale: Locale): { common: Messages } {
  const messages = LOOKUP[locale] ?? LOOKUP['en'];
  return { common: messages };
}
