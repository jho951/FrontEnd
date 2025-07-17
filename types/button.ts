import { HTMLMotionProps } from 'framer-motion';
import { ComponentPropsWithRef, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  prefetch?: boolean;
}

interface ButtonProps extends BaseButtonProps, HTMLMotionProps<'button'> {}

interface LinkButtonProps extends BaseButtonProps, ComponentPropsWithRef<'a'> {
  href: string;
}

type HamburgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
  size?: number;
  tabIndex?: number;
};

export type {
  ButtonVariant,
  ButtonSize,
  BaseButtonProps,
  ButtonProps,
  LinkButtonProps,
  HamburgerButtonProps,
};
