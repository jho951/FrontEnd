'use client';

import { useState, useRef, useEffect } from 'react';
import type { CompactSelectProps, SelectOption } from '@/types';
import styles from '@/styles/select/CompactSelect.module.css';

export default function CompactSelect<T extends SelectOption>({
  options,
  value,
  onChange,
  className,
  placeholder = '선택',
  renderOptionLabel,
}: CompactSelectProps<T>) {
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
    <div className={`${styles.wrapper} ${className ?? ''}`} ref={containerRef}>
      <button
        type="button"
        className={styles.display}
        onClick={() => setOpen(prev => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {renderOptionLabel?.(selected!) ?? selected?.label ?? placeholder}
        <span className={styles.chevron}>▾</span>
      </button>

      {open && (
        <ul role="listbox" className={styles.dropdown}>
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
