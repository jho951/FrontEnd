import { SUPPORTED_LANGUAGES } from '../constants';

export const generateStaticParams = () => {
  return SUPPORTED_LANGUAGES.map(lang => ({ lang }));
};
