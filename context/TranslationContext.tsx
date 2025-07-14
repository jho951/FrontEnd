'use client';
import React, { createContext, ReactNode } from 'react';
import type { Messages, Locale } from '@/types';

export interface TranslationContextType {
  messages: Messages;
  lang: Locale;
}

export const TranslationsContext = createContext<TranslationContextType>({
  messages: {} as Messages,
  lang: 'en',
});

interface Props {
  messages: Messages;
  lang: Locale;
  children: ReactNode;
}

export function TranslationsProvider({ messages, lang, children }: Props) {
  return (
    <TranslationsContext.Provider value={{ messages, lang }}>
      {children}
    </TranslationsContext.Provider>
  );
}
