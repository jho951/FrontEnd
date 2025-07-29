'use client';

import { useState } from 'react';
import Image from 'next/image';

import { BLUR_DATA_URL, FALL_BACK_IMAGE } from '@/constants';

import { CustomImageProps } from '@/types/image';

import styles from '@/styles/image/CustomImage.module.css';

export default function CustomImage({ src, alt, className, ...rest }: CustomImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const finalSrc = !src || hasError ? FALL_BACK_IMAGE : src;
  const commonProps = {
    src: finalSrc,

    onError: () => setHasError(true),
    onLoadingComplete: () => setIsLoaded(true),
    placeholder: 'blur' as const,
    blurDataURL: BLUR_DATA_URL,
    loading: rest.loading ?? 'lazy',
    unoptimized: rest.unoptimized ?? false,
    sizes: rest.sizes ?? '100vw',
    priority: rest.priority ?? false,
    className: `${styles.image} ${isLoaded ? styles.loaded : ''} ${className ?? ''}`,
    ...rest,
  };

  return (
    <div
      role="img"
      aria-label={alt}
      className={`${styles.wrapper} ${!isLoaded ? styles.skeleton : ''} ${className ?? ''}`}
    >
      {'fill' in rest && rest.fill ? (
        <Image alt={alt} fill {...commonProps} />
      ) : (
        <Image width={rest.width} height={rest.height} alt={alt} {...commonProps} />
      )}
    </div>
  );
}
