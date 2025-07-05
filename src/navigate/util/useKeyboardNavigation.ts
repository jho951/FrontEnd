import { useEffect } from 'react';

type UseKeyboardNavigationProps = {
  itemCount: number;
  focusedIndex: number | null;
  setFocusedIndex: (index: number) => void;
  orientation?: 'horizontal' | 'vertical';
};

export function useKeyboardNavigation({
  itemCount,
  focusedIndex,
  setFocusedIndex,
  orientation = 'horizontal',
}: UseKeyboardNavigationProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (focusedIndex === null) return;

      if (orientation === 'horizontal') {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          setFocusedIndex((focusedIndex + 1) % itemCount);
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          setFocusedIndex((focusedIndex - 1 + itemCount) % itemCount);
        }
      } else {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setFocusedIndex((focusedIndex + 1) % itemCount);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setFocusedIndex((focusedIndex - 1 + itemCount) % itemCount);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [focusedIndex, itemCount, orientation, setFocusedIndex]);
}
