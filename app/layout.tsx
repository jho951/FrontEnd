import type { ReactNode } from 'react';

import RssScript from '@/components/scripts/RssScript';
import AdsenseScript from '@/components/scripts/AdsenseScript';

import { DEFAULT_LANGUAGE } from '@/constants';

import { siteMetadata } from '@/libs/meta-data';
import { siteViewport } from '@/libs/view-port';

import '@/styles/global/font.css';
import '@/styles/global/theme.css';
import '@/styles/global/reset.css';
import '@/styles/global/class.css';

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={DEFAULT_LANGUAGE} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <RssScript />
        <AdsenseScript />
      </head>
      <body>{children}</body>
    </html>
  );
}

export const metadata = siteMetadata;
export const viewport = siteViewport;
