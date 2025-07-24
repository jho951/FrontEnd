import { PageProps } from '@/types';
import LegalPage from '@/features/legal/LegalPage';

export default async function Legal({ params }: PageProps) {
  return <LegalPage params={params} />;
}
