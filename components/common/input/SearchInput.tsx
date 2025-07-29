'use client';
import { forwardRef } from 'react';

import { BaseInputProps } from '@/types';

import styles from '@/styles/input/input.module.css';

const SearchInput = forwardRef<HTMLInputElement, BaseInputProps>(({ ...props }, ref) => (
  <div className={styles.iconWrapper}>
    <span className={styles.icon}>🔍</span>
    <input type="search" ref={ref} className={styles.input} {...props} />
  </div>
));

SearchInput.displayName = 'SearchInput';

export default SearchInput;
