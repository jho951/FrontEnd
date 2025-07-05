'use client';

import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { HEADER_AUTH_LINK, HEADER_NAV_LINK } from '@/header/constant/routes';

import LinkButton from '@/button/component/LinkButton';
import { useKeyboardNavigation } from '@/navigate/util/useKeyboardNavigation';

import styles from '@/header/style/HeaderNav.module.css';

export default function HeaderNav() {
  const pathname = usePathname();
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const navItems = [...HEADER_NAV_LINK, ...HEADER_AUTH_LINK];
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useKeyboardNavigation({
    itemCount: navItems.length,
    focusedIndex,
    setFocusedIndex,
    orientation: 'horizontal',
  });

  useEffect(() => {
    if (focusedIndex !== null) {
      itemRefs.current[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  return (
    <nav className={styles.container} role="navigation" aria-label="주요 사이트 내비게이션">
      <ul role="menubar" className={styles.navList}>
        {HEADER_NAV_LINK.map((item, idx) => (
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
        {HEADER_AUTH_LINK.map((item, idx) => {
          const actualIdx = HEADER_NAV_LINK.length + idx;
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
