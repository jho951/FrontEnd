import { SUPPORTED_LOCALES } from '@/constants';

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.filter(lang => lang !== 'ko').map(lang => ({ lang }));
}
