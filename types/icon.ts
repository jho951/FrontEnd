import type { FC, SVGProps } from 'react';

/**
 * 아이콘 이름 목록 (아이콘 객체와 동기화됨)
 */
const iconKeys = {
  logo: null,
  sun: null,
  moon: null,
  arrow: null,
  rss: null,
  gitHub: null,
  globe: null,
} as const;

/**
 * 아이콘 이름 유니온 타입
 */
type IconName = keyof typeof iconKeys;

type SvgComponent = FC<SVGProps<SVGSVGElement>>;

/**
 * 공통 SVG 아이콘 Props
 */
interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  className?: string;
}

/**
 * 로고 아이콘용 텍스트 옵션
 */
interface LogoIconProps {
  text?: string;
}

export type { IconName, LogoIconProps, IconProps, SvgComponent };
