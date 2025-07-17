import dynamic from 'next/dynamic';
import type { SvgComponent, IconName } from '@/types';

function getIconComponent(name: IconName): SvgComponent {
  switch (name) {
    case 'sun':
      return dynamic(() => import('@/assets/icons/sun.svg'), { ssr: false }) as SvgComponent;
    case 'logo':
      return dynamic(() => import('@/assets/icons/logo.svg'), { ssr: false }) as SvgComponent;
    case 'moon':
      return dynamic(() => import('@/assets/icons/moon.svg'), { ssr: false }) as SvgComponent;

    default:
      throw new Error(`Unknown icon: ${name}`);
  }
}

export { getIconComponent };
