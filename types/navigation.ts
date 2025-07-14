type KeyboardProps = {
  itemCount: number;
  focusedIndex: number | null;
  setFocusedIndex: (index: number) => void;
  orientation?: 'horizontal' | 'vertical';
};

export type { KeyboardProps };
