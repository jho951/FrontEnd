import { notFound } from 'next/navigation';

import { MODAL_VALID_SLUGS } from '@/constants';
import { PageProps } from '@/types';

import styles from '@/styles/features/LegalPage.module.css';

export default async function LegalPage({ params }: PageProps) {
  const { slug } = await params;
  if (!slug || !MODAL_VALID_SLUGS.includes(slug)) {
    return notFound();
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{slug.replace(/-/g, ' ')}</h1>
    </main>
  );
}
