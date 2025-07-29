'use client';

import { useState, useMemo } from 'react';
import type { SearchableSelectProps, SelectOption } from '@/types';
import styles from '@/styles/select/SearchableSelect.module.css';

export default function SearchableSelect<T extends SelectOption>({
  options,
  value,
  onChange,
  renderOptionLabel,
  placeholder = 'Search...',
}: SearchableSelectProps<T>) {
  const [search, setSearch] = useState('');
  const filteredOptions = useMemo(() => {
    return options.filter(opt => opt.label.toLowerCase().includes(search.toLowerCase()));
  }, [search, options]);

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder={typeof placeholder === 'string' ? placeholder : ''}
        aria-label="Search options"
      />
      <ul role="listbox" className={styles.dropdown}>
        {filteredOptions.length > 0 ? (
          filteredOptions.map(opt => (
            <li
              key={opt.value}
              role="option"
              className={styles.option}
              aria-selected={opt.value === value}
              onClick={() => onChange(opt.value)}
            >
              {renderOptionLabel?.(opt) ?? opt.label}
            </li>
          ))
        ) : (
          <li className={styles.empty}>No options found</li>
        )}
      </ul>
    </div>
  );
}
