'use client';

import { motion } from 'framer-motion';

import { ButtonProps } from '@/button/type/Button';

import styles from '@/button/style/Button.module.css';

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const classNames = `${styles.button} ${styles[variant]} ${styles[size]} ${isLoading ? styles.loading : ''} ${className}`;

  return (
    <motion.button
      className={classNames.trim()}
      disabled={isLoading || rest.disabled}
      {...rest}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
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
}
