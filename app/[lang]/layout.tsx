import { ClientLayoutWrapper } from '@/components/layout/wrapper/ClientLayoutWrapper';

import { ThemeProvider, TranslationsProvider } from '@/context';
import { getServerCurrentLanguage } from '@/libs/lang/get-server-language';
import { getTranslation } from '@/libs/lang/translation';
import { SetHtmlLang } from '@/libs/html/set-html-lang';

import type { LayoutProps } from '@/types';

export default async function LocaleLayout({ children, modal }: LayoutProps) {
  const lang = await getServerCurrentLanguage();
  const { common: messages } = getTranslation(lang);

  return (
    <ThemeProvider>
      <SetHtmlLang lang={lang} />
      <TranslationsProvider messages={messages} lang={lang}>
        <ClientLayoutWrapper>
          <main>
            {children}
            {modal}
          </main>
        </ClientLayoutWrapper>
      </TranslationsProvider>
    </ThemeProvider>
  );
}
