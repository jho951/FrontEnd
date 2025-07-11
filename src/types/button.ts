import { HTMLMotionProps } from 'framer-motion';
import { ComponentPropsWithRef, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  prefetch?: boolean;
}

type HamburgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
  size?: number;
  tabIndex?: number;
};

export type { HamburgerButtonProps };

export interface ButtonProps extends BaseButtonProps, HTMLMotionProps<'button'> {}

export interface LinkButtonProps extends BaseButtonProps, ComponentPropsWithRef<'a'> {
  href: string;
}
