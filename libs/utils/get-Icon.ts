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
    case 'arrow':
      return dynamic(() => import('@/assets/icons/arrow.svg'), { ssr: false }) as SvgComponent;
    case 'rss':
      return dynamic(() => import('@/assets/icons/rss.svg'), { ssr: false }) as SvgComponent;
    case 'git':
      return dynamic(() => import('@/assets/icons/git.svg'), { ssr: false }) as SvgComponent;
    case 'globe':
      return dynamic(() => import('@/assets/icons/globe.svg'), { ssr: false }) as SvgComponent;

    default:
      throw new Error(`Unknown icon: ${name}`);
  }
}

export { getIconComponent };
