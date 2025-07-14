import { Locale } from '@/types';

export type PageProps = {
  params: Promise<{ lang: Locale; slugs?: string[] }>;
};
