'use client';

import { usePathname } from 'next/navigation';

import SkipNav from '@/components/layout/header/SkipNav';
import HeaderWrapper from '@/components/layout/wrapper/HeaderWrapper';
import Footer from '@/components/layout/footer/Footer';

import { FOOTER_EXCLUDED_PATHS, HEADER_EXCLUDED_PATHS } from '@/constants';
import { Locale } from '@/types';

export function ClientLayoutWrapper({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: Locale;
}) {
  const pathname = usePathname();
  const shouldRenderHeader = !HEADER_EXCLUDED_PATHS.some(path => pathname.startsWith(path));
  const shouldRenderFooter = !FOOTER_EXCLUDED_PATHS.some(path => pathname.startsWith(path));

  return (
    <>
      <SkipNav />
      {shouldRenderHeader && <HeaderWrapper />}
      {children}
      {shouldRenderFooter && <Footer lang={lang} />}
    </>
  );
}
