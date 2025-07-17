'use client';

import { useState, useTransition } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

import Icon from '@/components/common/icon/Icon';
import Select from '@/components/common/select/Select';

import { getLanguageCookie, setLanguageCookie } from '@/libs/cookie';

import { DEFAULT_LANGUAGE, LANGUAGE_OPTIONS, COPY, SNS_LINK } from '@/constants';

import type { Locale, LanguageOption } from '@/types';
import styles from '@/styles/footer/FooterSns.module.css';

// ✅ 초기 언어 결정 로직
function resolveInitialLang(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;

  const cookieLang = getLanguageCookie();
  const isValid = LANGUAGE_OPTIONS.some(l => l.value === cookieLang);
  return isValid ? (cookieLang as Locale) : DEFAULT_LANGUAGE;
}

export default function FooterSns() {
  const [language, setLanguage] = useState<Locale>(resolveInitialLang);
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (nextLang: Locale) => {
    if (nextLang === language) return;

    setLanguageCookie(nextLang);
    setLanguage(nextLang);

    const segments = pathname.split('/');
    const [, , ...rest] = segments; // /ko/about → ['ko', 'about']
    const nextPath = `/${nextLang}/${rest.join('/')}`;

    startTransition(() => {
      router.push(nextPath);
    });
  };

  const selectedLanguage = LANGUAGE_OPTIONS.find(l => l.value === language)!;

  return (
    <div className={styles.bottom}>
      <p className={styles.copy}>{COPY}</p>
      <div className={styles.languageAndIcons}>
        <Select<LanguageOption>
          options={LANGUAGE_OPTIONS}
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
