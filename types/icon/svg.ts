import { FC, SVGProps } from 'react';

import { IconName } from '@/types/icon/icon';

/**
 * SVG 컴퍼넌트 타입
 */
export type SvgComponent = FC<SVGProps<SVGSVGElement>>;

/**
 * 공통 SVG 아이콘 Props
 */
export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  className?: string;
}
