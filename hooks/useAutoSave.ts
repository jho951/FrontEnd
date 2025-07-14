import { useEffect, useRef } from 'react';

export function useAutosave<T>(value: T, delay: number, onSave: (value: T) => void) {
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      onSave(value);
    }, delay);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [value, delay, onSave]);
}
