'use client';

import { useEffect, useRef, useState } from 'react';
import type { AsyncSelectProps, SelectOption } from '@/types';
import styles from '@/styles/select/AsyncSelect.module.css';

/**
 * 🔍 사용법 예시:
 *
 * ```tsx
 * const fetchUserOptions = async (query: string) => {
 *   return await api.searchUsers(query); // T[] 타입 반환
 * };
 *
 * <AsyncSelect
 *   value={selectedUserId}
 *   onChange={setSelectedUserId}
 *   fetchOptions={fetchUserOptions}
 *   placeholder="유저 검색"
 * />
 * ```
 */
export default function AsyncSelect<T extends SelectOption>({
  value,
  onChange,
  fetchOptions,
  placeholder = '검색...',
  loadingText = '로딩 중...',
  noOptionsText = '결과가 없습니다.',
  renderOptionLabel,
  className,
}: AsyncSelectProps<T>) {
  const [options, setOptions] = useState<T[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selected = options.find(opt => opt.value === value);

  // 입력값을 value에 맞춰 초기화
  useEffect(() => {
    if (selected) {
      setInput(selected.label);
    }
  }, [selected]);

  // 외부 클릭 시 dropdown 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 입력 변화 시 옵션 비동기 fetch
  useEffect(() => {
    if (!open) return;
    let ignore = false;

    const loadOptions = async () => {
      setLoading(true);
      try {
        const result = await fetchOptions(input);
        if (!ignore) {
          setOptions(result);
        }
      } catch {
        if (!ignore) setOptions([]);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    const timer = setTimeout(loadOptions, 250);

    return () => {
      ignore = true;
      clearTimeout(timer);
    };
  }, [input, open, fetchOptions]);

  return (
    <div ref={containerRef} className={`${styles.wrapper} ${className ?? ''}`}>
      <input
        className={styles.input}
        value={input}
        placeholder={placeholder}
        onChange={e => {
          setInput(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
      />

      {open && (
        <ul className={styles.dropdown} role="listbox">
          {loading ? (
            <li className={styles.loading}>{loadingText}</li>
          ) : options.length === 0 ? (
            <li className={styles.empty}>{noOptionsText}</li>
          ) : (
            options.map(opt => (
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
                {renderOptionLabel?.(opt) ?? opt.label}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
