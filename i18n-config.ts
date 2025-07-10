export const locales = ['en', 'ko'] as const;
export const defaultLocale = 'ko';
export type Locale = (typeof locales)[number];
