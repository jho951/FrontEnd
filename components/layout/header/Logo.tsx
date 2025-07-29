import * as React from 'react';
import Link from 'next/link';
import Icon from '@/components/common/icon/Icon';
import { LogoProps } from '@/types';

import styles from '@/styles/header/Logo.module.css';

function Logo({ pathname, onClick }: LogoProps) {
  return (
    <Link
      className={styles.container}
      href="/"
      aria-label="홈으로 이동"
      aria-current={pathname === '/' ? 'page' : undefined}
      onClick={onClick}
    >
      <Icon name="logo" size={44} />
      <h1 className="sr-only">Skill Blog</h1>
    </Link>
  );
}

export default Logo;
