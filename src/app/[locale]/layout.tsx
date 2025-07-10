import { ReactNode } from 'react';
import { Locale } from 'i18n-config';

import { getTranslation } from '@/features/i18n/server';

import { ThemeProvider } from '@/context/ThemeContext';
import { TranslationProvider } from '@/context/TranslationContext';

import { ClientLayoutWrapper } from '@/components/layout/wrapper/ClientLayoutWrapper';

import RssScript from '@/scripts/RssScript';
import AdsenseScript from '@/scripts/AdsenseScript';

import { siteMetadata } from '@/libs/metadata';
import { siteViewport } from '@/libs/viewport';

import '@/styles/theme.css';
import '@/styles/reset.css';
import '@/styles/global.css';

export async function generateStaticParams() {
  return [{ locale: 'ko' }, { locale: 'en' }];
}

export const metadata = siteMetadata;
export const viewport = siteViewport;

export default async function RootLayout(props: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  const { children, params } = props;
  const locale = params.locale;

  const translations = await getTranslation(locale);
  const dict = translations.common;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <RssScript />
        <AdsenseScript />
      </head>
      <body>
        <ThemeProvider>
          <TranslationProvider dict={dict} locale={locale}>
            <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
