import { HTMLMotionProps } from 'framer-motion';
import { AnchorHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
}

export interface ButtonProps extends BaseButtonProps, HTMLMotionProps<'button'> {}

export interface LinkButtonProps extends BaseButtonProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}
