'use client';

import { forwardRef } from 'react';
import ButtonBase from '@/components/common/button/ButtonBase';
import { ButtonBaseProps } from '@/types';

const ActionButton = forwardRef<HTMLButtonElement, ButtonBaseProps>((props, ref) => {
  return <ButtonBase ref={ref} {...props} />;
});

ActionButton.displayName = 'ActionButton';
export default ActionButton;
