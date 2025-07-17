'use client';

import { useContext } from 'react';
import { interpolate } from '@/libs/interpolate';

import { TranslationsContext } from '@/context/TranslationContext';
import type { Messages, NestedKey } from '@/types';

function useTranslations<NS extends keyof Messages>(namespace: NS) {
  const { messages } = useContext(TranslationsContext);

  return function t<Key extends NestedKey<Messages[NS]>>(
    key: Key,
    vars?: Record<string, unknown>,
  ): string {
    const nsMessages = messages[namespace] as Messages[NS];
    const fullKey = key as string;

    const parts = fullKey.split('.');
    let msg: unknown = nsMessages;

    for (const part of parts) {
      if (typeof msg === 'object' && msg !== null && part in msg) {
        msg = (msg as Record<string, unknown>)[part];
      } else {
        return `${namespace}.${key}`;
      }
    }

    return typeof msg === 'string' ? (vars ? interpolate(msg, vars) : msg) : `${namespace}.${key}`;
  };
}

export { useTranslations };
