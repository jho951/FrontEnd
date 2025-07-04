'use client';

import Link from 'next/link';

import { LinkButtonProps } from '@/button/type/Button';

import styles from '@/button/style/Button.module.css';

export default function LinkButton({
  href,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  ...rest
}: LinkButtonProps) {
  const classNames = `${styles.button} ${styles[variant]} ${styles[size]} ${isLoading ? styles.loading : ''} ${className}`;

  return (
    <Link className={classNames.trim()} {...rest} href={href}>
      {isLoading ? (
        <span className={styles.spinner} />
      ) : (
        <>
          {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
        </>
      )}
    </Link>
  );
}
