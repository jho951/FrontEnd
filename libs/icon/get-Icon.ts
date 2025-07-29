import dynamic from 'next/dynamic';
import { IconName, SvgComponent } from '@/types/icon';

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
    case 'window':
      return dynamic(() => import('@/assets/icons/window.svg'), { ssr: false }) as SvgComponent;
    case 'file':
      return dynamic(() => import('@/assets/icons/file.svg'), { ssr: false }) as SvgComponent;
    case 'play':
      return dynamic(() => import('@/assets/icons/play.svg'), { ssr: false }) as SvgComponent;
    case 'pause':
      return dynamic(() => import('@/assets/icons/pause.svg'), { ssr: false }) as SvgComponent;
    case 'google':
      return dynamic(() => import('@/assets/icons/google.svg'), { ssr: false }) as SvgComponent;
    case 'apple':
      return dynamic(() => import('@/assets/icons/apple.svg'), { ssr: false }) as SvgComponent;
    case 'kakao':
      return dynamic(() => import('@/assets/icons/kakao.svg'), { ssr: false }) as SvgComponent;
    case 'microsoft':
      return dynamic(() => import('@/assets/icons/microsoft.svg'), { ssr: false }) as SvgComponent;
    default:
      throw new Error(`Unknown icon: ${name}`);
  }
}

export { getIconComponent };
