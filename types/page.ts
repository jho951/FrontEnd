import { Locale } from '@/types/translate';

type PageProps = {
  params: { slug?: string; lang: Locale };
  searchParams?: Record<string, string | string[]>;
};

type BaseLayoutProps = {
  lang: Locale;
  children: React.ReactNode;
};

type LayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
  params: { lang: Locale };
};

export type { PageProps, LayoutProps, BaseLayoutProps };
