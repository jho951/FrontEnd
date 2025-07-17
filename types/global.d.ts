import type { AdsbygoogleConfig } from '@/types';

/**
 * 전역 Window 객체에 `adsbygoogle` 속성을 추가합니다.
 */
declare global {
  interface Window {
    adsbygoogle: AdsbygoogleConfig[];
  }
}

/**
 * SVG 파일을 React 컴포넌트로 불러올 수 있게 하는 모듈 선언입니다.
 */
declare module '*.svg' {
  import * as React from 'react';
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
