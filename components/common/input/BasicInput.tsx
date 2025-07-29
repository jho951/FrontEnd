'use client';
import { forwardRef } from 'react';
import clsx from 'clsx';

import { BaseInputProps } from '@/types';

import styles from '@/styles/input/input.module.css';

const BasicInput = forwardRef<HTMLInputElement, BaseInputProps>(({ className, ...props }, ref) => (
  <input ref={ref} className={clsx(styles.input, className)} {...props} />
));

BasicInput.displayName = 'BasicInput';

export default BasicInput;
