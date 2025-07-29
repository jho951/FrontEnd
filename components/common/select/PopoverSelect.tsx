'use client';

import { useState, useRef, useEffect } from 'react';
import ActionButton from '@/components/common/button/ActionButton';

import type { PopoverSelectProps, SelectOption } from '@/types';

import styles from '@/styles/select/PopoverSelect.module.css';

export default function PopoverSelect<T extends SelectOption>({
  options,
  value,
  onChange,
  placeholder,
  renderOptionLabel,
}: PopoverSelectProps<T>) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selected = options.find(opt => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <ActionButton
        type="button"
        className={styles.trigger}
        onClick={() => setOpen(prev => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        variant="secondary"
      >
        {selected ? (renderOptionLabel?.(selected) ?? selected.label) : (placeholder ?? '선택')}
        <span className={styles.chevron}>▾</span>
      </ActionButton>

      {open && (
        <ul className={styles.dropdown} role="listbox">
          {options.map(opt => (
            <li
              key={opt.value}
              role="option"
              className={styles.option}
              aria-selected={opt.value === value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
            >
              {renderOptionLabel?.(opt) ?? opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
