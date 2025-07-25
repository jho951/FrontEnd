import { siteMetadata } from '@/libs/seo/meta-data';
import { siteViewport } from '@/libs/seo/view-port';
import { BaseLayoutProps } from '@/types';

import '@/styles/global/reset.css';
import '@/styles/global/font.css';
import '@/styles/global/theme.css';
import '@/styles/global/class.css';

export default function RootLayout({ children, modal }: BaseLayoutProps) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>{children}</body>
      {modal}
    </html>
  );
}

export const generateMetadata = async () => siteMetadata;
export const viewport = siteViewport;
