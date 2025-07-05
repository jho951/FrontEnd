'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

import { NAV_ITEMS } from '@/navigate/constant/navItem';

import styles from '@/navigate/style/AccessibleNav.module.css';

export default function AccessibleNav() {
  const navRef = useRef<HTMLUListElement>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!navRef.current || focusedIndex === null) return;

      const itemCount = NAV_ITEMS.length;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setFocusedIndex(prev => (prev! + 1) % itemCount);
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setFocusedIndex(prev => (prev! - 1 + itemCount) % itemCount);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [focusedIndex]);

  return (
    <nav aria-label="메인 내비게이션">
      <ul ref={navRef} role="menubar" className={styles.navMenu}>
        {NAV_ITEMS.map((item, idx) => (
          <li key={item.href} role="none">
            <Link
              href={item.href}
              role="menuitem"
              tabIndex={0}
              className={styles.navLink}
              onFocus={() => setFocusedIndex(idx)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
