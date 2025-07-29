'use client';

import { forwardRef } from 'react';
import clsx from 'clsx';
import Icon from '@/components/common/icon/Icon';

import { IconButtonProps } from '@/types';
import ButtonBase from '@/components/common/button/ButtonBase';

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, iconSize, className, ...rest }, ref) => {
    return (
      <ButtonBase ref={ref} className={clsx(className)} {...rest}>
        <Icon name={icon} size={iconSize} />
      </ButtonBase>
    );
  },
);

IconButton.displayName = 'IconButton';
export default IconButton;
