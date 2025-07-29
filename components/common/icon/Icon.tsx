'use client';
import { useMemo } from 'react';

import { getIconComponent } from '@/libs/icon/get-Icon';
import { IconProps } from '@/types/icon';

export default function Icon({ name, size = 24, className, ...props }: IconProps) {
  const SvgIcon = useMemo(() => getIconComponent(name), [name]);

  if (!SvgIcon) return null;

  return (
    <SvgIcon
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      {...props}
    />
  );
}
