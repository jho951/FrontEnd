import React from 'react';

import { siteMetadata } from '@/libs/metadata';
import { siteViewport } from '@/libs/viewport';
import { ThemeProvider } from '@/context/ThemeContext';

import AdsenseScript from '@/script/component/AdsenseScript';

import ClientLayoutWrapper from '@/components/layout/header/ClientLayoutWrapper';

import '@/styles/global.css';
import '@/styles/theme.css';
import '@/styles/reset.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <AdsenseScript />
      </head>
      <body>
        <ThemeProvider>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata = siteMetadata;
export const viewport = siteViewport;
