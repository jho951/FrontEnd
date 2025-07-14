'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import { Locale } from '@/types';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

export default function MarkdownEditor({ lang }: { lang: Locale }) {
  const [value, setValue] = useState<string | undefined>('**Hello Markdown!**');

  return (
    <div data-color-mode="light">
      <MDEditor value={value} onChange={setValue} height={500} />
    </div>
  );
}
