import { useEffect } from 'react';
import { KeyboardProps } from '@/types/index';

function useKeyboard({
  itemCount,
  focusedIndex,
  setFocusedIndex,
  orientation = 'horizontal',
}: KeyboardProps) {
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

export { useKeyboard };
