import { ReactNode } from 'react';

/**
 * 지원되는 언어 코드
 */
export type Locale = 'en' | 'ko';

/**
 * 언어 선택 항목을 표현하는 인터페이스
 */
export interface LanguageOption {
  /** 고유 ID (예: dropdown에서 key로 사용) */
  id: number;
  /** 언어 코드 (ex. 'en', 'ko') */
  value: Locale;
  /** 사용자에게 보여질 언어명 라벨 */
  label: string;
}

/**
 * 다국어 메시지 구조 정의
 */
export interface Messages {
  header: {
    /** 홈 메뉴 라벨 */
    home: string;
    /** 블로그 메뉴 라벨 */
    blog: string;
  };
  home: {
    /** 홈 페이지 제목 */
    title: string;
    /** 홈 페이지 설명 */
    description: string;
  };
}

/**
 * 번역 컨텍스트에서 사용하는 값 타입
 */
export interface TranslationContextType {
  /** 현재 활성화된 메시지 객체 */
  messages: Messages;
  /** 현재 선택된 언어 코드 */
  lang: Locale;
}

/**
 * 번역 Provider 컴포넌트 Props 정의
 */
export interface TranslateProviderProps {
  /** 자식 컴포넌트 (ReactNode) */
  children: ReactNode;
  /** 번역 메시지 객체 */
  messages: Messages;
  /** 선택된 언어 코드 */
  lang: Locale;
}

/**
 * 중첩된 객체에서 가능한 모든 경로 키를 문자열 리터럴 유니언 타입으로 추출
 * 예: { a: { b: string } } → 'a' | 'a.b'
 */
export type NestedKey<T> = T extends object
  ? {
      [K in keyof T]: K extends string ? `${K}` | `${K}.${NestedKey<T[K]>}` : never;
    }[keyof T]
  : never;
