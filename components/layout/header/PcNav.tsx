import { useState, useRef, useEffect } from 'react';

import LinkButton from '@/components/common/button/LinkButton';

import { NOT_AUTH_LINK } from '@/constants';

import styles from '@/styles/header/PcNav.module.css';
import { HeaderNavProps } from '@/types';

export default function PcNav({ gnb, pathname }: HeaderNavProps) {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (focusedIndex !== null) {
      itemRefs.current[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  return (
    <nav className={styles.container} role="navigation" aria-label="주요 사이트 내비게이션">
      <ul role="menubar" className={`${styles.navList} focusable`}>
        {gnb.map((item, idx) => (
          <li key={item.id} role="none" className={styles.navItem}>
            <LinkButton
              href={item.href}
              className={styles.link}
              role="menuitem"
              tabIndex={0}
              size="md"
              onFocus={() => setFocusedIndex(idx)}
              aria-current={pathname === item.href ? 'page' : undefined}
              variant="text"
            >
              {item.label}
            </LinkButton>

            {item.children && (
              <ul role="menu" className={styles.submenu}>
                {item.children.map(child => (
                  <li key={child.href} role="none">
                    <LinkButton
                      href={child.href}
                      className={styles.subLink}
                      role="menuitem"
                      size="md"
                      tabIndex={0}
                      aria-current={pathname === child.href ? 'page' : undefined}
                      variant="text"
                    >
                      {child.label}
                    </LinkButton>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <span className={styles.space} aria-hidden />

      <ul role="menubar" className={styles.authList}>
        {NOT_AUTH_LINK.map((item, idx) => {
          const actualIdx = gnb.length + idx;
          return (
            <li key={item.id} role="none">
              <LinkButton
                href={item.href}
                className={styles.link}
                role="menuitem"
                size="sm"
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
