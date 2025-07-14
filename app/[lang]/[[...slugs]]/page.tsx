import { notFound } from 'next/navigation';
import type { Locale } from '@/types';
import HomePage from '@/features/home/HomePage';
import EditPage from '@/features/edit/EditPage';

export default async function Page({ params }: { params: { lang: Locale; slugs?: string[] } }) {
  const { lang, slugs = [] } = params;
  if (slugs.length === 0) {
    return <HomePage lang={lang} />;
  }

  const [first, second] = slugs;

  // /ko/about
  if (first === 'edit' && !second) {
    return <EditPage lang={lang} />;
  }

  // 그 외는 404
  return notFound();
}
