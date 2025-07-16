import { notFound } from 'next/navigation';

import HomePage from '@/features/home/HomePage';
import EditPage from '@/features/edit/EditPage';

import type { PageProps } from '@/types';

export default async function Page({ params }: PageProps) {
  const { lang, slugs = [] } = await params;
  const [first, second] = slugs;

  if (slugs.length === 0) {
    return <HomePage lang={lang} />;
  }

  if (first === 'edit' && !second) {
    return <EditPage />;
  }

  return notFound();
}
