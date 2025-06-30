'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeButton from '@/component/button/themeButton/ThemeButton';
import MobileMenu from './MobileMenu';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">My Skill Blog</Link>
      </div>

      <nav className={`${styles.nav} ${isOpen ? styles.show : ''}`}>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/tags">Tags</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <div className={styles.actions}>
        <ThemeButton />
        <button
          className={styles.menuToggle}
          onClick={() => setIsOpen(prev => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          ☰
        </button>
      </div>

      {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
    </header>
  );
}
