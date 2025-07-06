import Link from 'next/link';

import Icon from '@/components/common/icon/Icon';

import styles from '@/styles/header/Logo.module.css';

export default function Logo() {
  return (
    <h1>
      <Link className={styles.container} href="/" aria-label="홈으로 이동">
        <Icon name="logo" size={40} />
        <span className="sr-only">Skill Blog</span>
      </Link>
    </h1>
  );
}
