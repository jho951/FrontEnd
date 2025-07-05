'use client';

import { usePathname } from 'next/navigation';
import { HEADER_FOOTER_EXCLUDED_PATHS } from '@/header/constant/routes';

import Footer from '@/footer/component/Footer';
import HeaderWrapper from '@/layout/component/HeaderWrapper';

import SkipNav from '@/navigate/component/SkipNav';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldRenderLayout = !HEADER_FOOTER_EXCLUDED_PATHS.some(path => pathname.startsWith(path));

  return (
    <>
      <SkipNav />
      {shouldRenderLayout && <HeaderWrapper />}
      {children}
      {shouldRenderLayout && <Footer />}
    </>
  );
}
