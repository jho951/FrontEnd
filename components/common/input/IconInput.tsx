import { forwardRef } from 'react';

import { IconInputProps } from '@/types';

import styles from '@/styles/input/input.module.css';

const IconInput = forwardRef<HTMLInputElement, IconInputProps>(
  ({ icon, className, ...props }, ref) => (
    <div className={`${styles.iconWrapper} ${className}`}>
      <span className={styles.icon}>{icon}</span>
      <input ref={ref} className={styles.input} {...props} />
    </div>
  ),
);

IconInput.displayName = 'IconInput';
export default IconInput;
