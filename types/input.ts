import { InputHTMLAttributes, TextareaHTMLAttributes, ReactNode } from 'react';

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

interface WithLabel {
  label: string;
  id?: string;
}

interface WithIcon {
  icon: ReactNode;
}

interface LabeledInputProps extends BaseInputProps, WithLabel {}

interface OTPInputProps {
  length?: number;
  onComplete?: (code: string) => void;
  autoFocus?: boolean;
}

interface IconInputProps extends BaseInputProps, WithIcon {}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  autoResize?: boolean;
}

export type {
  BaseInputProps,
  WithLabel,
  OTPInputProps,
  IconInputProps,
  TextareaProps,
  LabeledInputProps,
};
