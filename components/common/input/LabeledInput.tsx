import { forwardRef } from 'react';

import { LabeledInputProps } from '@/types';

import styles from '@/styles/input/input.module.css';

const LabeledInput = forwardRef<HTMLInputElement, LabeledInputProps>(
  ({ label, id, className, ...props }, ref) => (
    <div>
      <label htmlFor={id} className={`${styles.label} ${className}`}>
        {label}
      </label>
      <input id={id} ref={ref} className={styles.input} {...props} />
    </div>
  ),
);

LabeledInput.displayName = 'LabeledInput';
export default LabeledInput;
