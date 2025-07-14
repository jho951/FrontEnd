'use client';

import MarkdownEditor from '@/components/common/editor/MarkdownEditor';
import { Locale } from '@/types';

export default function EditPage({ lang }: { lang: Locale }) {
  return (
    <main>
      <MarkdownEditor lang={lang} />
    </main>
  );
}
