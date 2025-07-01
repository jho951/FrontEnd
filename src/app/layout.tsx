import React from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/global/context/ThemeContext';

import Header from '@/header/component/Header';

import '@/global/style/reset.css';
import '@/global/style/theme.css';
import '@/global/style/globalStyle.css';
import ThemeButton from '@/button/theme/ThemeButton';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'My Skill Blog',
  description: 'my skill blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <Header />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
