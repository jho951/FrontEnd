'use client';

import { usePathname } from 'next/navigation';

import SkipNav from '@/components/layout/header/SkipNav';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';

import { FOOTER_EXCLUDED_PATHS, HEADER_EXCLUDED_PATHS } from '@/constants';

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldRenderHeader = !HEADER_EXCLUDED_PATHS.some(path => pathname.startsWith(path));
  const shouldRenderFooter = !FOOTER_EXCLUDED_PATHS.some(path => pathname.startsWith(path));

  return (
    <>
      <SkipNav />
      {shouldRenderHeader && <Header pathname={pathname} />}
      {children}
      {shouldRenderFooter && <Footer />}
    </>
  );
}
