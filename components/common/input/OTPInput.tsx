'use client';
import { useState, useRef } from 'react';

import { OTPInputProps } from '@/types';
import styles from '@/styles/input/input.module.css';

const OTPInput = ({ length = 6, onComplete, autoFocus }: OTPInputProps) => {
  const [values, setValues] = useState<string[]>(Array(length).fill(''));
  const inputs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    if (value && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }

    if (newValues.every(v => v !== '') && onComplete) {
      onComplete(newValues.join(''));
    }
  };

  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      {values.map((val, i) => (
        <input
          key={i}
          ref={el => {
            inputs.current[i] = el;
          }}
          value={val}
          onChange={e => handleChange(i, e.target.value)}
          className={styles.input}
          maxLength={1}
          autoFocus={autoFocus && i === 0}
          inputMode="numeric"
          style={{ textAlign: 'center' }}
        />
      ))}
    </div>
  );
};

export default OTPInput;
