'use client';

import { useEffect, useRef, useState } from 'react';
import { SelectProps } from '@/types/select';

import styles from '@/styles/select/Select.module.css';

export default function Select({
  options,
  value,
  onChange,
  className = '',
  placeholder = 'Select',
  renderOptionLabel,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => setOpen(prev => !prev);

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(o => o.value === value);

  return (
    <div className={`${styles.wrapper} ${className}`} ref={ref}>
      <button
        className={styles.trigger}
        onClick={toggle}
        aria-haspopup="listbox"
        aria-expanded={open}
        type="button"
      >
        {selectedOption?.label || placeholder}
      </button>

      {open && (
        <ul className={styles.dropdown} role="listbox">
          {options.map(option => (
            <li
              key={option.value}
              className={styles.option}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              role="option"
              aria-selected={option.value === value}
            >
              {renderOptionLabel ? renderOptionLabel(option) : option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
