import { notFound } from 'next/navigation';
import styles from '@/styles/features/LegalModal.module.css';

const legalContent: Record<string, string> = {
  privacy: 'This is our Privacy Policy.',
  terms: 'These are our Terms of Service.',
  security: 'Information about our Security policy.',
  esg: 'Environmental, Social, and Governance content.',
  'responsible-disclosure': 'Responsible Disclosure policy details.',
};

export default function LegalPage({ params }: { params: { lang: string; slug: string } }) {
  const content = legalContent[params.slug];

  if (!content) {
    notFound();
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{params.slug.replace(/-/g, ' ')}</h1>
      <p className={styles.content}>{content}</p>
    </main>
  );
}
