'use client';

import React, { useEffect, useRef, useState } from 'react';
import type { SelectProps, Option } from '../../../types';
import styles from '@/styles/select/Select.module.css';

export default function Select({
  options,
  value,
  onChange,
  className = '',
  placeholder = 'Select...',
  renderOptionLabel,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className={`${styles.wrapper} ${className}`} ref={containerRef}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen(prev => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {selectedOption
          ? renderOptionLabel
            ? renderOptionLabel(selectedOption)
            : selectedOption.label
          : placeholder}
      </button>

      {open && (
        <ul className={styles.dropdown} role="listbox">
          {options.map((opt: Option) => (
            <li
              key={opt.value}
              className={styles.option}
              role="option"
              aria-selected={opt.value === value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
            >
              {renderOptionLabel ? renderOptionLabel(opt) : opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
