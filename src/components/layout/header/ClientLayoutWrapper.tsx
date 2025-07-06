'use client';

import { usePathname } from 'next/navigation';

import { HEADER_FOOTER_EXCLUDED_PATHS } from '@/constants/link';

import SkipNav from '@/components/common/navigation/SkipNav';

import Footer from '@/components/layout/footer/Footer';

import HeaderWrapper from '@/components/layout/header/HeaderWrapper';

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
