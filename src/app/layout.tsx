import React from 'react';

import { siteMetadata } from '@/script/constant/metadata';
import { ThemeProvider } from '@/global/context/ThemeContext';

import AdsenseScript from '@/script/component/AdsenseScript';

import ClientLayoutWrapper from '@/layout/component/ClientLayoutWrapper';

import '@/global/style/reset.css';
import '@/global/style/theme.css';
import '@/global/style/globalStyle.css';

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
