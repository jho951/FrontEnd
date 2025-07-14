'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import { Locale } from '@/types';

import styles from '@/styles/editor/MarkdownEditor.module.css';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

export default function MarkdownEditor({ lang }: { lang: Locale }) {
  const [value, setValue] = useState<string | undefined>('**Hello Markdown!**');

  return (
    <div data-color-mode="light" className={styles.editorWrapper}>
      <MDEditor value={value} onChange={setValue} height={500} />
    </div>
  );
}
