'use client';

import { usePathname } from 'next/navigation';
import { HEADER_FOOTER_EXCLUDED_PATHS } from '@/global/constant/routes';

import Header from '@/header/component/Header';
import Footer from '@/footer/component/Footer';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldRenderLayout = !HEADER_FOOTER_EXCLUDED_PATHS.some(path => pathname.startsWith(path));

  return (
    <>
      {shouldRenderLayout && <Header />}
      {children}
      {shouldRenderLayout && <Footer />}
    </>
  );
}
