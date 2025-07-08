'use client';

import { usePathname } from 'next/navigation';

import { HEADER_EXCLUDED_PATHS, FOOTER_EXCLUDED_PATHS } from '@/constants/link';

import Footer from '@/components/layout/footer/Footer';

import SkipNav from '@/components/common/accessibility/SkipNav';

import HeaderWrapper from '@/components/layout/wrapper/HeaderWrapper';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldRenderHeader = !HEADER_EXCLUDED_PATHS.some(path => pathname.startsWith(path));
  const shouldRenderFooter = !FOOTER_EXCLUDED_PATHS.some(path => pathname.startsWith(path));

  return (
    <>
      <SkipNav />
      {shouldRenderHeader && <HeaderWrapper />}
      {children}
      {shouldRenderFooter && <Footer />}
    </>
  );
}
