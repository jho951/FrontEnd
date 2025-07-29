import { SUPPORTED_LOCALES } from '@/constants';
import HomePage from '@/features/home/HomePage';

import type { PageProps } from '@/types';
import { notFound } from 'next/navigation';

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  if (!SUPPORTED_LOCALES.includes(lang)) {
    notFound();
  }
  return <HomePage />;
}
