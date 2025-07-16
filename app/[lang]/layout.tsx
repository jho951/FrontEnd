import { ClientLayoutWrapper } from '@/components/layout/wrapper/ClientLayoutWrapper';

import { ThemeProvider, TranslationsProvider } from '@/context';

import type { LayoutProps } from '@/types';

import { getServerCurrentLanguage, getTranslation, setHtmlLang } from '@/libs';

export default async function LocaleLayout({ children }: LayoutProps) {
  const lang = await getServerCurrentLanguage();
  setHtmlLang(lang);
  const { common: messages } = getTranslation(lang);

  return (
    <ThemeProvider>
      <TranslationsProvider messages={messages} lang={lang}>
        <ClientLayoutWrapper lang={lang}>
          <main> {children}</main>
        </ClientLayoutWrapper>
      </TranslationsProvider>
    </ThemeProvider>
  );
}
