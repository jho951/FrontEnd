import { ClientLayoutWrapper } from '@/components/layout/wrapper/ClientLayoutWrapper';
import { DEFAULT_LANGUAGE } from '@/constants';
import { ThemeProvider, TranslationsProvider } from '@/context';
import { SetHtmlLang } from '@/libs/html/set-html-lang';
import { getTranslation } from '@/libs/lang/translation';

import type { LayoutProps } from '@/types';

export default async function DefaultLayout({
  children,
  modal,
  params = { locale: DEFAULT_LANGUAGE },
}: LayoutProps) {
  const { locale } = await params;
  const { common: messages } = getTranslation(locale);

  return (
    <ThemeProvider>
      <SetHtmlLang lang={locale} />
      <TranslationsProvider messages={messages} lang={locale}>
        <main>
          <ClientLayoutWrapper>
            {children}
            {modal}
          </ClientLayoutWrapper>
        </main>
      </TranslationsProvider>
    </ThemeProvider>
  );
}
