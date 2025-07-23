import NotFoundPage from '@/features/not-found/not-found';
import { notFoundMetadata } from '@/libs/seo/meta-data';

function NotFound() {
  return <NotFoundPage />;
}

export default NotFound;

export const metadata = notFoundMetadata;
