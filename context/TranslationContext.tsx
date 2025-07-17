'use client';

import { createContext } from 'react';
import type { TranslationContextType, TranslateProviderProps } from '@/types';

const TranslationsContext = createContext<TranslationContextType>({
  messages: {} as TranslationContextType['messages'],
  lang: 'ko',
});

function TranslationsProvider({ messages, lang, children }: TranslateProviderProps) {
  return (
    <TranslationsContext.Provider value={{ messages, lang }}>
      {children}
    </TranslationsContext.Provider>
  );
}

export { TranslationsContext, TranslationsProvider };
