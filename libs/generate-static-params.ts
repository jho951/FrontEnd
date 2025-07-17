import { SUPPORTED_LOCALES } from '../constants';

export const generateStaticParams = () => {
  return SUPPORTED_LOCALES.map(lang => ({ lang }));
};
