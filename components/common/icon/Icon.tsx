'use client';

import { FC, SVGProps } from 'react';
import dynamic from 'next/dynamic';

import type { IconName, IconProps, SvgComponent } from '@/types';

const icons: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  sun: dynamic(() => import('../../../assets/icons/sun.svg')) as SvgComponent,
  logo: dynamic(() => import('../../../assets/icons/logo.svg')) as SvgComponent,
  moon: dynamic(() => import('../../../assets/icons/moon.svg')) as SvgComponent,
  arrow: dynamic(() => import('../../../assets/icons/arrow.svg')) as SvgComponent,
  rss: dynamic(() => import('../../../assets/icons/rss.svg')) as SvgComponent,
  gitHub: dynamic(() => import('../../../assets/icons/github.svg')) as SvgComponent,
  globe: dynamic(() => import('../../../assets/icons/globe.svg')) as SvgComponent,
};

export default function Icon({ name, size = 24, className, ...props }: IconProps) {
  const SvgIcon = icons[name];

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
