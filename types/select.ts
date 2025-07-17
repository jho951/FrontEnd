interface SelectProps<T extends SelectOption> {
  options: T[];
  value: T['value'];
  onChange: (v: T['value']) => void;
  className?: string;
  placeholder?: React.ReactNode;
  renderOptionLabel?: (option: T) => React.ReactNode;
}

interface SelectOption {
  value: string;
  label: string;
}

export type { SelectProps, SelectOption };
