import icons from '@/icon/util/Icons';

type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  size?: number;
  className?: string | undefined;
} & React.SVGProps<SVGSVGElement>;

export type { IconName, IconProps };
