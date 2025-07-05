'use client';

import styles from '@/navigate/style/SkipNav.module.css';

export default function SkipNav() {
  return (
    <a href="#main-content" className={styles.container}>
      본문 바로가기
    </a>
  );
}
