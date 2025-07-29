'use client';

import { useRef } from 'react';
import clsx from 'clsx';
import SegmentedButton from '@/components/common/button/SegmentedButton';

import type { SegmentedSelectProps, SelectOption } from '@/types';

import styles from '@/styles/select/SegmentedSelect.module.css';

export default function SegmentedSelect<T extends SelectOption>({
  options,
  value,
  onChange,
  disabled = false,
  iconMapper,
}: SegmentedSelectProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;

    const currentIdx = options.findIndex(opt => opt.value === value);
    if (e.key === 'ArrowRight') {
      const next = (currentIdx + 1) % options.length;
      onChange(options[next].value);
    }
    if (e.key === 'ArrowLeft') {
      const prev = (currentIdx - 1 + options.length) % options.length;
      onChange(options[prev].value);
    }
  };

  return (
    <div
      ref={containerRef}
      className={clsx(styles.wrapper, disabled && styles.disabled)}
      role="radiogroup"
      aria-label="Segmented select"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {options.map(opt => (
        <SegmentedButton
          key={opt.value}
          isActive={value === opt.value}
          onSelect={() => onChange(opt.value)}
          variant="secondary"
          size="md"
          disabled={disabled}
          leftIcon={iconMapper?.(opt)}
        >
          {opt.label}
        </SegmentedButton>
      ))}
    </div>
  );
}
