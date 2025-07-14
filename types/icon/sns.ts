import { IconName } from '@/types/icon/icon';

export interface SnsLink {
  name: string;
  href: string;
  icon: IconName;
  external?: boolean;
}
