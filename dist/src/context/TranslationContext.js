'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useMemo } from 'react';
const TranslationContext = createContext(undefined);
TranslationContext.displayName = 'TranslationContext';
export const TranslationProvider = ({ dict, locale, children, }) => (_jsx(TranslationContext.Provider, { value: { dict, locale }, children: children }));
export const useTranslation = () => {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }
    const { dict, locale } = context;
    const t = useMemo(() => {
        return (key) => {
            if (key in dict) {
                return dict[key];
            }
            return key;
        };
    }, [dict]);
    return { t, locale };
};
