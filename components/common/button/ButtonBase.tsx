'use client';

import { forwardRef } from 'react';
import clsx from 'clsx';
import { ButtonBaseProps } from '@/types';
import styles from '@/styles/button/buttonBase.module.css';

export const getButtonClasses = (variant = 'primary', size = 'md', className?: string) =>
  clsx(styles.button, styles[variant], styles[size], className);

const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      className,
      leftIcon,
      rightIcon,
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={getButtonClasses(variant, size, className)}
        disabled={isLoading || rest.disabled}
        aria-disabled={isLoading || rest.disabled}
        {...rest}
      >
        {isLoading ? (
          <span className={styles.spinner} aria-hidden="true" />
        ) : (
          <>
            {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
            {children}
            {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
          </>
        )}
      </button>
    );
  },
);

ButtonBase.displayName = 'ButtonBase';
export default ButtonBase;
