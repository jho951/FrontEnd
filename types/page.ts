import { Locale } from '@/types/translate';

type PageProps = {
  params: Promise<{ slugs?: string[]; lang: Locale }>;
};

type LayoutProps = {
  children: React.ReactNode;
  params: { lang: Locale };
};

export type { PageProps, LayoutProps };
