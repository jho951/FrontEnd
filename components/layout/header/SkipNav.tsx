'use client';

import Link from 'next/link';

import styles from '@/styles/header/SkipNav.module.css';

export default function SkipNav() {
  return (
    <Link href="#main-content" className={styles.container}>
      본문 바로가기
    </Link>
  );
}
