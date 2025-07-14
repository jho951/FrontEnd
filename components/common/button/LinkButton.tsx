'use client';

import { forwardRef } from 'react';
import NextLink from 'next/link';

import { LinkButtonProps } from '../../../types';
import styles from '@/styles/button/Button.module.css';

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(function LinkButton(
  {
    href,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    children,
    className = '',
    prefetch = true,
    'aria-label': ariaLabel,
    ...rest
  },
  ref,
) {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    isLoading ? styles.loading : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <NextLink
      href={href}
      prefetch={prefetch}
      className={`${classNames} focusable`}
      aria-label={ariaLabel}
      aria-disabled={isLoading}
      tabIndex={isLoading ? -1 : 0}
      ref={ref}
      {...rest}
    >
      {isLoading ? (
        <span className={styles.spinner} />
      ) : (
        <>
          {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
        </>
      )}
    </NextLink>
  );
});

LinkButton.displayName = 'LinkButton';
export default LinkButton;
