import { Locale } from '../../i18n-config';

export type PageProps = {
  params: {
    locale: Locale;
  };
};

export type LayoutProps = {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
};

export type ErrorProps = {
  error: Error;
  reset: () => void;
};
