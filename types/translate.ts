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
    home: string;
    blog: string;
  };
  home: {
    title: string;
    description: string;
  };
  navigation: {
    // GNB
    company: string;
    programming: string;
    posting: string;
    community: string;
    download: string;
    legal: string;

    // COMPANY
    about: string;
    brand: string;
    careers: string;

    // PROGRAMMING
    programmingLang: string;
    algorithm: string;
    dataStructure: string;
    os: string;
    network: string;
    security: string;
    dataBase: string;

    // POSTING
    newPosting: string;
    writing: string;
    tag: string;
    popular: string;

    // COMMUNITY
    contact: string;
    faq: string;
    linkedIn: string;
    slack: string;
    discord: string;

    // DOWNLOAD
    iphone: string;
    ipad: string;
    android: string;
    mac: string;
    window: string;

    // LEGAL
    privacy: string;
    terms: string;
    secure: string;
    esg: string;
    responsible: string;

    // AUTH
    myPage: string;
    logOut: string;
    signIn: string;
    signUp: string;
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
