import { ImageCardProps } from '@/types';

import styles from '@/styles/card/ImageCard.module.css';
import clsx from 'clsx';
import CustomImage from '@/components/common/image/CustomImage';

export default function ImageCard({
  title = 'card-image',
  imageUrl,
  themeOptions,
  selectedTheme,
  onThemeSelect,
  className,
}: ImageCardProps) {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.imageWrapper}>
        {imageUrl && <CustomImage className={styles.image} src={imageUrl} alt={title} />}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.themeSelector}>
          {themeOptions?.map(theme => (
            <button
              key={theme}
              onClick={() => onThemeSelect?.(theme)}
              className={clsx(styles.themeButton, theme === selectedTheme && styles.selected)}
            >
              {theme}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
