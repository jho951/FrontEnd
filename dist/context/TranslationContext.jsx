'use client';
import { createContext } from 'react';
export const TranslationsContext = createContext({
    messages: {},
    lang: 'en',
});
// **이 컴포넌트를** Layout에서 import 해서 쓰세요**
export function TranslationsProvider({ messages, lang, children }) {
    return (<TranslationsContext.Provider value={{ messages, lang }}>
      {children}
    </TranslationsContext.Provider>);
}
