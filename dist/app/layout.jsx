import RssScript from '@/components/scripts/RssScript';
import AdsenseScript from '@/components/scripts/AdsenseScript';
import { DEFAULT_LANGUAGE } from '@/constants';
import { siteMetadata, siteViewport } from '@/libs';
import '@/styles/theme.css';
import '@/styles/reset.css';
import '@/styles/global.css';
export default async function RootLayout({ children }) {
    return (<html lang={DEFAULT_LANGUAGE} suppressHydrationWarning>
      <head>
        <RssScript />
        <AdsenseScript />
      </head>
      <body>{children}</body>
    </html>);
}
export const metadata = siteMetadata;
export const viewport = siteViewport;
