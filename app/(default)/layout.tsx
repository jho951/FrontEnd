import { DEFAULT_LANGUAGE } from '@/constants';
import BaseLayout from '@/features/layout/BaseLayout';

import DefaultLayout from '@/features/layout/DefaultLayout';

import { generateMetadata } from '@/libs/seo/meta-data';
import { siteViewport } from '@/libs/seo/view-port';
import { LayoutProps } from '@/types';

export default async function Layout({ children, modal, params }: LayoutProps) {
  const lang = DEFAULT_LANGUAGE;
  return (
    <BaseLayout lang={lang}>
      <DefaultLayout modal={modal} params={params}>
        {children}
      </DefaultLayout>
    </BaseLayout>
  );
}

export { generateMetadata };
export const viewport = siteViewport;
