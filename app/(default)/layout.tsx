import DefaultLayout from '@/features/layout/DefaultLayout';
import RssScript from '@/components/scripts/RssScript';

import type { LayoutProps } from '@/types';

export default function Layout({ children, modal, params }: LayoutProps) {
  const { lang } = params;

  return (
    <>
      <RssScript lang={lang} />
      <DefaultLayout modal={modal} params={{ lang }}>
        {children}
      </DefaultLayout>
    </>
  );
}
