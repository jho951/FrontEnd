'use client';

import dynamic from 'next/dynamic';

import { useTheme } from '@/context';
import { MarkdownEditorProps } from '@/types/markdownEditor';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

export default function MarkdownEditor({ value, onChange }: MarkdownEditorProps) {
  const { theme } = useTheme();
  const colorMode = theme === 'dark' ? 'dark' : 'light';

  return (
    <div data-color-mode={colorMode}>
      <MDEditor
        value={value}
        onChange={(val = '', ...args) => onChange(val, ...args)}
        height={500}
      />
    </div>
  );
}
