import { ClientLayoutWrapper } from '@/components/layout/wrapper/ClientLayoutWrapper';
import { ThemeProvider, TranslationsProvider } from '@/context';

import { SetHtmlLang } from '@/libs/html/set-html-lang';
import { getTranslation } from '@/libs/lang/translation';

import type { LayoutProps } from '@/types';

export default async function DefaultLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  const { common: messages } = getTranslation(lang);

  return (
    <ThemeProvider>
      <SetHtmlLang lang={lang} />
      <TranslationsProvider messages={messages} lang={lang}>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </TranslationsProvider>
    </ThemeProvider>
  );
}
