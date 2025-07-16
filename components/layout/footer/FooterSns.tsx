'use client';

import { useState, useTransition } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

import Icon from '@/components/common/icon/Icon';
import Select from '@/components/common/select/Select';

import { setLanguageCookie } from '@/libs/cookie';

import { COPY, LANGUAGE_LIST, SNS_LINK } from '@/constants';
import type { LanguageOption, Locale } from '@/types';

import styles from '@/styles/footer/FooterSns.module.css';

export default function FooterSns({ lang }: { lang: Locale }) {
  const [language, setLanguage] = useState<LanguageOption['value']>(lang);
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (nextLang: LanguageOption['value']) => {
    if (nextLang === lang) return;

    setLanguageCookie(nextLang);
    setLanguage(nextLang);

    const segments = pathname.split('/');
    const [, , ...rest] = segments;
    const nextPath = `/${nextLang}/${rest.join('/')}`;

    startTransition(() => {
      router.push(nextPath);
    });
  };

  const selectedLanguage = LANGUAGE_LIST.find(l => l.value === language)!;

  return (
    <div className={styles.bottom}>
      <p className={styles.copy}>{COPY}</p>
      <div className={styles.languageAndIcons}>
        <Select<LanguageOption>
          options={LANGUAGE_LIST}
          value={language}
          onChange={handleLocaleChange}
          renderOptionLabel={opt => (
            <>
              {isPending && <span className="spinner" />}
              {opt.label}
            </>
          )}
          placeholder={
            <p className={styles.languageText}>
              <Icon className={styles.globe} name="globe" size={20} />
              <span>{selectedLanguage.label}</span>
            </p>
          }
        />

        <div className={styles.icons}>
          {SNS_LINK.map(({ name, href, icon, external = false }) =>
            external ? (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
              >
                <Icon name={icon} size={30} />
              </Link>
            ) : (
              <Link key={name} href={href} aria-label={name}>
                <Icon name={icon} size={30} />
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
