import { ImageProps } from 'next/image';

interface CustomImageProps extends Omit<ImageProps, 'src'> {
  src?: string;
  alt: string;
  className?: string;
}

export type { CustomImageProps };
