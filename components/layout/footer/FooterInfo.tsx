'use client';

import { useTransition } from 'react';
import { useRouter, usePathname } from 'next/navigation';

import Icon from '@/components/common/icon/Icon';
import { DropdownSelect } from '@/components/common/select';

import { LANGUAGE_OPTIONS, COPY, SNS_LINK } from '@/constants';

import type { Locale, LanguageOption } from '@/types';

import styles from '@/styles/footer/FooterInfo.module.css';
import { LinkButton } from '@/components/common/button';
import Spinner from '@/components/common/skeleton/Spinner';

export default function FooterInfo() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const localeList: Locale[] = ['ko', 'en'];
  const segments = pathname.split('/');
  const maybeLang = segments[1];
  const currentLang: Locale = localeList.includes(maybeLang as Locale)
    ? (maybeLang as Locale)
    : 'ko';

  const handleLocaleChange = (nextLang: Locale) => {
    if (nextLang === currentLang) return;

    const [, maybeLang, ...rest] = pathname.split('/');
    const isCurrentLangDefault = !localeList.includes(maybeLang as Locale);

    const pathWithoutLocale = isCurrentLangDefault ? pathname : `/${rest.join('/')}`;
    const nextPath = nextLang === 'ko' ? pathWithoutLocale : `/${nextLang}${pathWithoutLocale}`;

    startTransition(() => {
      router.push(nextPath);
    });
  };

  const selectedLanguage = LANGUAGE_OPTIONS.find(l => l.value === currentLang)!;

  return (
    <div className={styles.bottom}>
      <p className={styles.copy}>{COPY}</p>

      <div className={styles.languageAndIcons}>
        {isPending ? (
          <Spinner />
        ) : (
          <div className={styles.selectWrap}>
            <Icon className={styles.globe} name="globe" size={22} />
            <DropdownSelect<LanguageOption>
              variant="text"
              options={LANGUAGE_OPTIONS}
              value={currentLang}
              onChange={handleLocaleChange}
              renderOptionLabel={opt => <span>{opt.label}</span>}
              placeholder={<span>{selectedLanguage.label}</span>}
            />
          </div>
        )}

        <div className={styles.icons}>
          {SNS_LINK.map(({ id, href, icon }) => (
            <LinkButton
              className={styles.iconLink}
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={id}
              size="sm"
            >
              <Icon name={icon} size={24} />
            </LinkButton>
          ))}
        </div>
      </div>
    </div>
  );
}
