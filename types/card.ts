// 공통 타입 정의
export interface BaseCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  className?: string;
}

// 개별 카드만의 props 확장
export interface HeroCardProps extends BaseCardProps {
  onClick?: () => void;
}

export interface ImageCardProps extends BaseCardProps {
  themeOptions?: string[];
  selectedTheme?: string;
  onThemeSelect?: (theme: string) => void;
}

export interface TextCardProps extends BaseCardProps {
  buttonLabel?: string;
  onButtonClick?: () => void;
}

export interface ButtonCardProps extends BaseCardProps {
  buttonText: string;
  onButtonClick?: () => void;
}
