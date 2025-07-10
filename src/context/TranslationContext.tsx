'use client';

import { ReactNode, createContext, useContext, useMemo } from 'react';

type Dict = Record<string, string>;

type TranslationContextType = {
  dict: Dict;
  locale: string;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);
TranslationContext.displayName = 'TranslationContext';

export const TranslationProvider = ({
  dict,
  locale,
  children,
}: {
  dict: Dict;
  locale: string;
  children: ReactNode;
}) => (
  <TranslationContext.Provider value={{ dict, locale }}>{children}</TranslationContext.Provider>
);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }

  const { dict, locale } = context;

  const t = useMemo(() => {
    return (key: string): string => {
      if (key in dict) {
        return dict[key as keyof typeof dict];
      }
      return key;
    };
  }, [dict]);

  return { t, locale };
};
