'use client';

import styles from '@/styles/accessibility/SkipNav.module.css';

export default function SkipNav() {
  return (
    <a href="#main-content" className={styles.container}>
      본문 바로가기
    </a>
  );
}
