'use client';

import { useState } from 'react';
import styles from '@/styles/button/StepperButton.module.css';

import { StepperButtonProps } from '@/types';
import ButtonBase from '@/components/common/button/ButtonBase';

export default function StepperButton({
  min = 0,
  max = 10,
  initial = 0,
  step = 1,
  onChange,
}: StepperButtonProps) {
  const [value, setValue] = useState(initial);

  const increment = () => {
    if (value + step <= max) {
      setValue(prev => {
        const next = prev + step;
        onChange?.(next);
        return next;
      });
    }
  };

  const decrement = () => {
    if (value - step >= min) {
      setValue(prev => {
        const next = prev - step;
        onChange?.(next);
        return next;
      });
    }
  };

  return (
    <div className={styles.stepper}>
      <ButtonBase onClick={decrement} aria-label="Decrease">
        -
      </ButtonBase>
      <span className={styles.value}>{value}</span>
      <ButtonBase onClick={increment} aria-label="Increase">
        +
      </ButtonBase>
    </div>
  );
}
