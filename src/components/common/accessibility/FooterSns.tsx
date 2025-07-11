import { useState } from 'react';

import Link from 'next/link';

import Icon from '@/components/common/icon/Icon';
import Select from '@/components/common/select/Select';

import { COPY, LANGUAGE_OPTIONS, SNS_LINK } from '@/constants';

import styles from '@/styles/accessibility/FooterSns.module.css';

export default function FooterSns() {
  const [language, setLanguage] = useState('English');
  return (
    <div className={styles.bottom}>
      <p className={styles.copy}>{COPY}</p>
      <div className={styles.languageAndIcons}>
        <Select
          options={LANGUAGE_OPTIONS}
          value={language}
          onChange={setLanguage}
          placeholder={
            <p className={styles.languageText}>
              <Icon className={styles.globe} name="globe" size={20} /> <span>language</span>
            </p>
          }
          renderOptionLabel={opt => <span>{opt.label}</span>}
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
