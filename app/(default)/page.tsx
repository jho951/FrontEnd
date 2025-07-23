import HomePage from '@/features/home/HomePage';

import type { PageProps } from '@/types';

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  return <HomePage lang={lang} />;
}
