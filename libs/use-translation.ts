'use client';
import { useContext } from 'react';

import { TranslationsContext } from '../context/TranslationContext';
import type { Messages } from '../types';
import { interpolate } from './interpolate';

type NestedKey<T> = T extends object
  ? { [K in keyof T]: K extends string ? `${K}` | `${K}.${NestedKey<T[K]>}` : never }[keyof T]
  : never;

export function useTranslations<NS extends keyof Messages>(namespace: NS) {
  const { messages } = useContext(TranslationsContext);
  return function t<Key extends NestedKey<Messages[NS]>>(key: Key, vars?: Record<string, any>) {
    const fullKey = `${namespace}.${key}`;
    const parts = fullKey.split('.') as (keyof Messages)[];
    let msg: any = messages;
    for (const part of parts) {
      msg = msg?.[part];
      if (msg == null) return fullKey;
    }
    return typeof msg === 'string' ? (vars ? interpolate(msg, vars) : msg) : fullKey;
  };
}
