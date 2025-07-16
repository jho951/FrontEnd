'use client';

import { useEffect } from 'react';
import { Locale } from '@/types';

export function SetHtmlLang({ lang }: { lang: Locale }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
