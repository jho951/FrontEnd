import { Metadata } from 'next';

import NotFoundPage from '@/features/not-found/not-found';
import { notFoundMetadata } from '@/libs/seo/meta-data';

export default function NotFound() {
  return <NotFoundPage />;
}

export async function generateMetadata(): Promise<Metadata> {
  return notFoundMetadata;
}
