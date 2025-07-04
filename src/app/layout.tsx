import React from 'react';
import Script from 'next/script';
import type { Metadata } from 'next';

import { ADSENSE_CLIENT_ID } from '@/global/constant/secret';
import { ThemeProvider } from '@/global/context/ThemeContext';
import ClientLayoutWrapper from '@/global/component/wrapper/ClientLayoutWrapper';

import '@/global/style/reset.css';
import '@/global/style/theme.css';
import '@/global/style/globalStyle.css';

export const metadata: Metadata = {
  title: 'My Skill Blog',
  description: 'my skill blog',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === 'production' && ADSENSE_CLIENT_ID && (
          <Script
            id="adsense-init"
            strategy="afterInteractive"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body>
        <ThemeProvider>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
