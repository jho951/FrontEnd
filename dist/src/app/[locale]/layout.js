import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider } from '@/context/ThemeContext';
import { getTranslation } from '@/libs/i18n';
import { TranslationProvider } from '@/context/TranslationContext';
import { ClientLayoutWrapper } from '@/components/layout/wrapper/ClientLayoutWrapper';
import { DEFAULT_LOCALE } from '@/constants';
export default async function LocaleLayout({ children, params }) {
    const locale = params.locale ?? DEFAULT_LOCALE;
    const { common } = await getTranslation(locale);
    return (_jsx("html", { lang: locale, suppressHydrationWarning: true, children: _jsx("body", { children: _jsx(ThemeProvider, { children: _jsx(TranslationProvider, { dict: common, locale: locale, children: _jsx(ClientLayoutWrapper, { children: children }) }) }) }) }));
}
