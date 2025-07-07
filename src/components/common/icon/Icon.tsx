'use client';

import React, { FC, SVGProps } from 'react';
import dynamic from 'next/dynamic';

import type { IconName, IconProps, SvgComponent } from '@/types';

const icons: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  sun: dynamic(() => import('@/asserts/sun.svg')) as SvgComponent,
  logo: dynamic(() => import('@/asserts/logo.svg')) as SvgComponent,
  moon: dynamic(() => import('@/asserts/moon.svg')) as SvgComponent,
  arrow: dynamic(() => import('@/asserts/arrow.svg')) as SvgComponent,
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
