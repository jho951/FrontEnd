import RssScript from '@/components/scripts/RssScript';
import AdsenseScript from '@/components/scripts/AdsenseScript';

import { DEFAULT_LANGUAGE } from '@/constants';

import { BaseLayoutProps } from '@/types';

import '@/styles/global/reset.css';
import '@/styles/global/font.css';
import '@/styles/global/theme.css';
import '@/styles/global/class.css';

/**
 * 가장 기본 레이아웃
 * @param param
 * @returns
 */

export default function BaseLayout({ lang = DEFAULT_LANGUAGE, children }: BaseLayoutProps) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <RssScript />
        <AdsenseScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
