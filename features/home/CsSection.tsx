'use client';

import { GNB } from '@/constants';

export default function CsSection() {
  const section = GNB.find(s => s.id === 'computerScience');

  if (!section || !section.children) return null;

  return <div></div>;
}
