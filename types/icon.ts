import { FC, SVGProps } from 'react';

import { ICON_KEYS } from '@/constants';

/**
 * 사용 가능한 아이콘 이름 유니온 타입입니다.
 * 예: 'logo' | 'sun' | 'moon' | ...
 */
type IconName = keyof typeof ICON_KEYS;

/**
 * 로고 전용 아이콘에서 텍스트 표시를 위한 props입니다.
 * 예: <Logo text="Skill Blog" />
 */
interface LogoProps {
  text: string;
}

/**
 * SVG 아이콘 컴포넌트 타입입니다.
 * React.FC 형태로 SVGProps를 확장합니다.
 */
type SvgComponent = FC<SVGProps<SVGSVGElement>>;

/**
 * 공통 SVG 아이콘 컴포넌트에서 사용되는 props 타입입니다.
 */
interface IconProps extends SVGProps<SVGSVGElement> {
  /** 아이콘 이름 (iconKeys에 정의된 이름 중 하나) */
  name: IconName;
  /** 아이콘 크기 (px 단위, 기본값 설정 가능) */
  size?: number;
  /** 사용자 정의 CSS 클래스 이름 */
  className?: string;
}

export type { IconName, LogoProps, SvgComponent, IconProps };
