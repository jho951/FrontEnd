import { useMemo } from 'react';

import { getIconComponent } from '@/libs/utils/get-Icon';
import { IconProps } from '@/types';

export default function Icon({ name, size = 24, className, ...props }: IconProps) {
  const SvgIcon = useMemo(() => getIconComponent(name), [name]);

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
