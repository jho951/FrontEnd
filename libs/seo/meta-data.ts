import type { Metadata } from 'next';

import { DESCRIPTION, PROJECT_URL, TITLE } from '@/constants';

async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: TITLE,
      template: `%s | ${TITLE}`,
    },
    description: DESCRIPTION,
    metadataBase: new URL(PROJECT_URL),

    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      type: 'website',
      url: PROJECT_URL,
      siteName: TITLE,
    },

    twitter: {
      card: 'summary_large_image',
      title: TITLE,
      description: DESCRIPTION,
    },

    alternates: {
      canonical: PROJECT_URL,
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
      },
    },
  };
}

const notFoundMetadata: Metadata = {
  title: '404 페이지를 찾을 수 없습니다 - 사이트명',
  description: '요청하신 페이지를 찾을 수 없습니다. URL을 확인하거나 홈으로 이동하세요.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: '404 페이지를 찾을 수 없습니다 - 사이트명',
    description: '요청하신 페이지를 찾을 수 없습니다. URL을 확인하거나 홈으로 이동하세요.',
    url: 'https://example.com/not-found',
    siteName: '사이트명',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: '404 페이지를 찾을 수 없습니다 - 사이트명',
    description: '요청하신 페이지를 찾을 수 없습니다. URL을 확인하거나 홈으로 이동하세요.',
  },
};

export { generateMetadata, notFoundMetadata };
