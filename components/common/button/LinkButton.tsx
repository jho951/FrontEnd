'use client';
import { forwardRef } from 'react';
import NextLink from 'next/link';
import clsx from 'clsx';

import { LinkButtonProps } from '@/types';
import { getButtonClasses } from '@/components/common/button/ButtonBase';

import styles from '@/styles/button/LinkButton.module.css';

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      href,
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      className,
      prefetch = true,
      ...rest
    },
    ref,
  ) => {
    return (
      <NextLink
        href={href}
        prefetch={prefetch}
        className={clsx(styles.link, getButtonClasses(variant, size, className))}
        ref={ref}
        {...rest}
      >
        {isLoading ? (
          <span className={styles.spinner} />
        ) : (
          <span className={styles.content}>{children}</span>
        )}
      </NextLink>
    );
  },
);

LinkButton.displayName = 'LinkButton';
export default LinkButton;
