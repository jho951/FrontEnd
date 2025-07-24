import DefaultLayout from '@/features/layout/DefaultLayout';
import RssScript from '@/components/scripts/RssScript';
import AdsenseScript from '@/components/scripts/AdsenseScript';
import AdsenseDebugger from '@/components/scripts/AdsenseDebugger';

import type { LayoutProps } from '@/types';

export default async function LangLayout({ children, modal, params }: LayoutProps) {
  const { lang } = await params;

  return (
    <>
      <RssScript lang={lang} />
      <AdsenseScript />
      <AdsenseDebugger />
      <DefaultLayout modal={modal} params={{ lang }}>
        {children}
      </DefaultLayout>
    </>
  );
}
