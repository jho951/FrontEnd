import { forwardRef } from 'react';

import { BaseInputProps } from '@/types';

import styles from '@/styles/input/input.module.css';

const DateInput = forwardRef<HTMLInputElement, BaseInputProps>(({ className, ...props }, ref) => (
  <input ref={ref} type="date" className={`${styles.input} ${className}`} {...props} />
));

DateInput.displayName = 'DateInput';
export default DateInput;
