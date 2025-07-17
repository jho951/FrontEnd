'use client';

import type { IconProps } from '@/types';
import { getIconComponent } from '@/libs/getIcon-component';

export default function Icon({ name, size = 24, className, ...props }: IconProps) {
  const SvgIcon = getIconComponent(name);

  if (!SvgIcon) return null;

  return (
    <SvgIcon
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
    />
  );
}
