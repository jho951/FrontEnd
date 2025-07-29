'use client';

import { forwardRef } from 'react';
import clsx from 'clsx';

import { NavigationButtonProps } from '@/types';
import ButtonBase from '@/components/common/button/ButtonBase';

const NavigationButton = forwardRef<HTMLButtonElement, NavigationButtonProps>(
  ({ isActive, ...props }, ref) => {
    return (
      <ButtonBase
        ref={ref}
        aria-current={isActive ? 'page' : undefined}
        className={clsx(props.className, isActive && 'active')}
        {...props}
      />
    );
  },
);

NavigationButton.displayName = 'NavigationButton';
export default NavigationButton;
