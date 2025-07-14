'use client';

import { useEffect } from 'react';
import type { Locale } from '@/types';

export default function LanguageSetter({ lang }: { lang: Locale }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
