import { Locale } from '@/types/translate';

type PageProps = {
  params: { slugs?: string[]; lang: Locale };
  searchParams?: Record<string, string | string[]>;
};

type LayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
  params: { lang: Locale };
};

export type { PageProps, LayoutProps };
