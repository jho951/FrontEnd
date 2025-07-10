import MarkdownEditor from '@/components/common/editor/MarkdownEditor';

import { getTranslation } from '@/features/i18n/server';
import { createTranslator } from '@/features/i18n/serverTranslator';

import { PageProps } from '@/types';

export default async function EditPage({ params }: PageProps) {
  const translations = await getTranslation(params.locale);
  const t = createTranslator(translations.common);

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">글 작성하기</h1>
      <MarkdownEditor />
    </main>
  );
}
