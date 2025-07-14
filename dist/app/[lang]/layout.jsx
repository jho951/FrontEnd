import { ThemeProvider, TranslationsProvider } from '@/context';
import { ClientLayoutWrapper } from '@/components/layout/wrapper/ClientLayoutWrapper';
import { getServerCurrentLanguage, getTranslation } from '@/libs';
import LanguageSetter from './languageSetter';
export default async function LocaleLayout({ children }) {
    const lang = await getServerCurrentLanguage();
    const { common: messages } = getTranslation(lang);
    return (<>
      <LanguageSetter lang={lang}/>

      <ThemeProvider>
        <TranslationsProvider messages={messages} lang={lang}>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </TranslationsProvider>
      </ThemeProvider>
    </>);
}
