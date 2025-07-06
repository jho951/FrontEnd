'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import LinkButton from '@/components/common/button/LinkButton';

import { NAV_LINK, NOT_AUTH_LINK } from '@/constants';

import styles from '@/styles/header/HeaderNav.module.css';

export default function HeaderNav() {
  const pathname = usePathname();
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (focusedIndex !== null) {
      itemRefs.current[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  return (
    <nav className={styles.container} role="navigation" aria-label="주요 사이트 내비게이션">
      <ul role="menubar" className={`${styles.navList} focusable`}>
        {NAV_LINK.map((item, idx) => (
          <li key={item.id} role="none">
            <LinkButton
              href={item.href}
              variant="text"
              className={styles.link}
              role="menuitem"
              tabIndex={0}
              onFocus={() => setFocusedIndex(idx)}
              aria-current={pathname === item.href ? 'page' : undefined}
            >
              {item.label}
            </LinkButton>
          </li>
        ))}
      </ul>

      <span className={styles.space} aria-hidden />

      <ul role="menubar" className={styles.authList}>
        {NOT_AUTH_LINK.map((item, idx) => {
          const actualIdx = NAV_LINK.length + idx;
          return (
            <li key={item.id} role="none">
              <LinkButton
                href={item.href}
                variant="text"
                className={styles.link}
                role="menuitem"
                tabIndex={0}
                onFocus={() => setFocusedIndex(actualIdx)}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </LinkButton>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
