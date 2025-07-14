import { Metadata } from 'next';

import { DESCRIPTION, PROJECT_URL, TITLE } from '@/constants';

export const siteMetadata: Metadata = {
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
