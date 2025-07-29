'use client';

import { forwardRef } from 'react';
import clsx from 'clsx';

import ButtonBase from '@/components/common/button/ButtonBase';

import { HamburgerButtonProps } from '@/types';
import styles from '@/styles/button/HamburgerButton.module.css';

const HamburgerButton = forwardRef<HTMLButtonElement, HamburgerButtonProps>(
  ({ isOpen, size = 24, className, ...props }, ref) => {
    return (
      <ButtonBase
        type="button"
        className={clsx(styles.container, isOpen && styles.open, className)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        style={{ width: size, height: size }}
        {...props}
        ref={ref}
      >
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
      </ButtonBase>
    );
  },
);

HamburgerButton.displayName = 'HamburgerButton';
export default HamburgerButton;
