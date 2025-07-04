import { useEffect, useState } from 'react';

/** 마우스 hover 지원 여부 */
export function isHoverSupported(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(hover: hover)').matches;
}

/** 커스텀 훅: hover 지원 여부 */
export function useIsHoverSupported(): boolean {
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    setIsHover(isHoverSupported());
  }, []);

  return isHover;
}

/** 터치 디바이스 여부 */
export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

/** 커스텀 훅: 터치 디바이스 여부 */
export function useIsTouchDevice(): boolean {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  return isTouch;
}

/** 모바일 디바이스 여부 */
export function isMobileDevice(): boolean {
  if (typeof navigator === 'undefined') return false;

  const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
  return /android|iphone|ipad|ipod|windows phone/i.test(ua);
}

/** 데스크탑 디바이스 여부 */
export function isDesktop(): boolean {
  return !isMobileDevice();
}

/** 커스텀 훅: 모바일/데스크탑 타입 분기 */
export function useDeviceType(): {
  isMobile: boolean;
  isDesktop: boolean;
} {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  return {
    isMobile,
    isDesktop: !isMobile,
  };
}
