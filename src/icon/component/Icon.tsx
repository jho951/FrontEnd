'use client';

import React, { FC, SVGProps } from 'react';
import dynamic from 'next/dynamic';

import { IconName, IconProps } from '@/icon/type/IconProps';

type SvgComponent = FC<SVGProps<SVGSVGElement>>;

const icons: Record<IconName, SvgComponent> = {
  logo: dynamic(() => import('@/icon/constant/logo.svg')) as SvgComponent,
  sun: dynamic(() => import('@/icon/constant/sun.svg')) as SvgComponent,
  moon: dynamic(() => import('@/icon/constant/moon.svg')) as SvgComponent,
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
