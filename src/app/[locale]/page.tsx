import { PageProps } from '@/types';
import { getTranslation } from '@/features/i18n/server';
import { createTranslator } from '@/features/i18n/serverTranslator';

import styles from './page.module.css';

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  const translations = await getTranslation(locale);
  const t = createTranslator(translations.common);

  return (
    <main id="main-content" className={styles.main}>
      <h1>{t('greeting')}</h1>
      <p>{t('intro')}</p>
    </main>
  );
}
