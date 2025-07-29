'use client';

import { forwardRef } from 'react';
import clsx from 'clsx';
import { getButtonClasses } from '@/components/common/button/ButtonBase';

import { SegmentedButtonProps } from '@/types';

import styles from '@/styles/button/SegmentedButton.module.css';

const SegmentedButton = forwardRef<HTMLButtonElement, SegmentedButtonProps>(
  (
    {
      children,
      isActive,
      onSelect,
      variant = 'secondary',
      size = 'md',
      className,
      leftIcon,
      rightIcon,
      isLoading = false,
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        role="radio"
        aria-checked={isActive}
        onClick={onSelect}
        className={clsx(
          styles.segmented,
          getButtonClasses(variant, size),
          isActive && styles.active,
          className,
        )}
        {...rest}
      >
        {isLoading ? (
          <span className={styles.spinner} aria-hidden />
        ) : (
          <>
            {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
          </>
        )}
      </button>
    );
  },
);

SegmentedButton.displayName = 'SegmentedButton';
export default SegmentedButton;
