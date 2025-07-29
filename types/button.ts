import { IconName } from '@/types/icon';

/**
 * 공통 버튼 속성 정의
 */
interface ButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'ghost' | 'text';
}

/**
 * 아이콘 버튼 속성 정의
 */
interface IconButtonProps extends Omit<ButtonBaseProps, 'leftIcon' | 'rightIcon'> {
  icon: IconName;
  iconSize?: number;
  iconPosition?: 'left' | 'right';
}

/**
 * 링크 버튼 속성 정의
 */
interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  prefetch?: boolean;
  isLoading?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'ghost' | 'text';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

/**
 * 플로팅 액션 버튼 속성 정의
 */
interface FloatingActionButtonProps extends ButtonBaseProps {
  icon: React.ReactNode;
  label?: string;
}

/**
 * 햄버거 버튼 속성 정의
 */
interface HamburgerButtonProps extends Omit<ButtonBaseProps, 'size'> {
  isOpen: boolean;
  size?: number;
}

/**
 * 내비게이션 버튼 속성 정의
 */
interface NavigationButtonProps extends ButtonBaseProps {
  isActive?: boolean;
}

/**
 * 스테퍼 버튼 속성 정의
 */
interface StepperButtonProps {
  min?: number;
  max?: number;
  initial?: number;
  step?: number;
  onChange?: (value: number) => void;
}

/**
 * 토글 버튼 속성 정의
 */
interface ToggleButtonProps extends Omit<ButtonBaseProps, 'onClick' | 'onToggle'> {
  toggled?: boolean;
  onToggleChange?: (active: boolean) => void;
}

/**
 * 라디오 버튼 속성 정의
 */
interface SegmentedButtonProps extends Omit<ButtonBaseProps, 'onClick'> {
  isActive: boolean;
  onSelect: () => void;
}

export type {
  ButtonBaseProps,
  IconButtonProps,
  LinkButtonProps,
  FloatingActionButtonProps,
  HamburgerButtonProps,
  NavigationButtonProps,
  StepperButtonProps,
  ToggleButtonProps,
  SegmentedButtonProps,
};
