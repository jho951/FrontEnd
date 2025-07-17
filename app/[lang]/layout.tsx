import { ClientLayoutWrapper } from '@/components/layout/wrapper/ClientLayoutWrapper';

import { ThemeProvider, TranslationsProvider } from '@/context';
import { getServerCurrentLanguage } from '@/libs/get-server-current-language';
import { getTranslation } from '@/libs/get-translation';
import { SetHtmlLang } from '@/libs/set-html-lang';

import type { LayoutProps } from '@/types';

export default async function LocaleLayout({ children }: LayoutProps) {
  const lang = await getServerCurrentLanguage();
  const { common: messages } = getTranslation(lang);

  return (
    <ThemeProvider>
      <SetHtmlLang lang={lang} />;
      <TranslationsProvider messages={messages} lang={lang}>
        <ClientLayoutWrapper>
          <main> {children}</main>
        </ClientLayoutWrapper>
      </TranslationsProvider>
    </ThemeProvider>
  );
}
