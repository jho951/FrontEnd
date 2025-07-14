'use client';

import React from 'react';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import { ButtonProps } from '../../../types';

import styles from '@/styles/button/Button.module.css';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    children,
    className = '',
    ...rest
  },
  ref,
) {
  const classNames = `${styles.button} ${styles[variant]} ${styles[size]} ${
    isLoading ? styles.loading : ''
  } ${className}`;

  return (
    <motion.button
      ref={ref}
      className={`${classNames.trim()}focusable`}
      disabled={isLoading || rest.disabled}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      {...rest}
    >
      {isLoading ? (
        <span className={styles.spinner} />
      ) : (
        <>
          {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
          <span>{children as React.ReactNode}</span>
          {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
        </>
      )}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;
