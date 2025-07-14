'use client';
import { useContext } from 'react';
import { TranslationsContext } from '../context/TranslationContext';
import { interpolate } from './interpolate';
export function useTranslations(namespace) {
    const { messages } = useContext(TranslationsContext);
    return function t(key, vars) {
        const fullKey = `${namespace}.${key}`;
        const parts = fullKey.split('.');
        let msg = messages;
        for (const part of parts) {
            msg = msg?.[part];
            if (msg == null)
                return fullKey;
        }
        return typeof msg === 'string' ? (vars ? interpolate(msg, vars) : msg) : fullKey;
    };
}
