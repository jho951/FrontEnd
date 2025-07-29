import { Locale } from '@/types/translate';

/**
 * 공통 라우트 param 구조
 */
interface LangParams {
  lang: Locale;
}

/**
 * 기본적인 페이지 prop 구조 (검색 쿼리 포함)
 */
interface BasePageProps {
  params: LangParams & { slug?: string };
  searchParams?: Record<string, string | string[]>;
}

/**
 * layout.tsx에서 사용하는 기본 레이아웃 props
 */
interface CommonLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

/**
 * 일반 페이지 컴포넌트에서 사용되는 props
 */
type PageProps = BasePageProps;

/**
 * Layout에서 사용하는 props (params까지 포함)
 */
interface LayoutProps extends CommonLayoutProps {
  params: LangParams;
}

/**
 * layout 내부에서 lang만 분리해서 전달하고 싶은 경우
 */
interface BaseLayoutProps extends CommonLayoutProps {
  lang: Locale;
}

export type { PageProps, LayoutProps, BaseLayoutProps };
