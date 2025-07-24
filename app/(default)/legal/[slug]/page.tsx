import { notFound } from 'next/navigation';

import LegalModal from '@/features/legal/LegalModal';

import { MODAL_VALID_SLUGS } from '@/constants';

import { PageProps } from '@/types';

export default async function LegalModalPage({ params }: PageProps) {
  const { slug } = await params;

  if (!slug || !MODAL_VALID_SLUGS.includes(slug)) {
    return notFound();
  }

  return <LegalModal slug={slug} />;
}
