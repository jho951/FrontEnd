export type SelectProps = {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: React.ReactNode;
  renderOptionLabel?: (option: { label: string; value: string }) => React.ReactNode;
};
