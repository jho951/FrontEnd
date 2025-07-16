import { SUPPORTED_LOCALES } from '@/constants';

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map(lang => ({ lang }));
}
