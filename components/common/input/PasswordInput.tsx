'use client';
import { useState, forwardRef } from 'react';

import { BaseInputProps } from '@/types';
import styles from '@/styles/input/input.module.css';

const PasswordInput = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ className, ...props }, ref) => {
    const [visible, setVisible] = useState(false);
    return (
      <div className={`${styles.iconWrapper} ${className}`}>
        <input type={visible ? 'text' : 'password'} ref={ref} className={styles.input} {...props} />
        <span
          className={styles.icon}
          onClick={() => setVisible(!visible)}
          style={{ cursor: 'pointer' }}
        >
          {visible ? '🙈' : '👁️'}
        </span>
      </div>
    );
  },
);
PasswordInput.displayName = 'PasswordInput';
export default PasswordInput;
