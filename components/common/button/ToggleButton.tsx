'use client';

import { useState } from 'react';
import clsx from 'clsx';
import styles from '@/styles/button/ToggleButton.module.css';
import { ToggleButtonProps } from '@/types';
import ButtonBase from '@/components/common/button/ButtonBase';

export default function ToggleButton({ toggled, onToggleChange, ...props }: ToggleButtonProps) {
  const isControlled = toggled !== undefined;
  const [internalToggled, setInternalToggled] = useState(false);
  const active = isControlled ? toggled : internalToggled;

  const handleClick = () => {
    if (!isControlled) setInternalToggled(!active);
    onToggleChange?.(!active);
  };

  return (
    <ButtonBase
      {...props}
      onClick={handleClick}
      className={clsx(styles.toggle, active && styles.active, props.className)}
      aria-checked={active}
      role="switch"
    >
      {props.children}
    </ButtonBase>
  );
}
