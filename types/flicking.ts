import { ReactNode } from 'react';

type arrowVisibility = 'all' | 'mobile' | 'desktop' | 'none';

interface FlickingProps {
  children: ReactNode[];
  autoSlideInterval?: number;
  storageKey?: string;
  arrowVisibility: arrowVisibility;
  pagination?: boolean;
}

export type { arrowVisibility, FlickingProps };
