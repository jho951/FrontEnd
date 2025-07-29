'use client';

import clsx from 'clsx';
import styles from '@/styles/button/FloatingActionButton.module.css';
import { FloatingActionButtonProps } from '@/types';
import ButtonBase from '@/components/common/button/ButtonBase';

export default function FloatingActionButton({
  icon,
  label,
  className,
  ...props
}: FloatingActionButtonProps) {
  return (
    <ButtonBase
      className={clsx(styles.fab, className)}
      aria-label={label || 'Floating Action'}
      {...props}
    >
      {icon}
    </ButtonBase>
  );
}
