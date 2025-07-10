import { LayoutProps } from '@/types';

function layout({ children }: LayoutProps) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

export default layout;
