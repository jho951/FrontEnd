'use client';
import { usePathname } from 'next/navigation';
import { HEADER_EXCLUDED_PATHS, FOOTER_EXCLUDED_PATHS } from '../../../constants/link';
import Footer from '../footer/Footer';
import SkipNav from '../../common/accessibility/SkipNav';
import HeaderWrapper from './HeaderWrapper';
export function ClientLayoutWrapper({ children }) {
    const pathname = usePathname();
    const shouldRenderHeader = !HEADER_EXCLUDED_PATHS.some(path => pathname.startsWith(path));
    const shouldRenderFooter = !FOOTER_EXCLUDED_PATHS.some(path => pathname.startsWith(path));
    return (<>
      <SkipNav />
      {shouldRenderHeader && <HeaderWrapper />}
      {children}
      {shouldRenderFooter && <Footer />}
    </>);
}
