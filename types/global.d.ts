import type { AdsbygoogleConfig } from '@/types';

// 이 파일은 전역 타입 선언 및 SVG 모듈 선언을 포함합니다.
export {};

/**
 * 전역 Window 객체에 `adsbygoogle` 속성을 추가합니다.
 * 이 속성은 Google AdSense의 광고 설정 배열입니다.
 */
declare global {
  interface Window {
    /**
     * Google AdSense 광고 설정 목록
     */
    adsbygoogle: AdsbygoogleConfig[];
  }
}

/**
 * SVG 파일을 React 컴포넌트로 불러올 수 있게 하는 모듈 선언입니다.
 */
declare module '*.svg' {
  import * as React from 'react';

  /**
   * SVG 파일을 React 컴포넌트로 사용하기 위한 기본 export
   */
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
