import type { Viewport } from 'next';

export const siteViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: '#f6fdf7',
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: '#121a12',
    },
  ],
};
