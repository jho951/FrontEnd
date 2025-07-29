import clsx from 'clsx';
import { HeroCardProps } from '@/types';

import styles from '@/styles/HeroCard.module.css';
import CustomImage from '@/components/common/image/CustomImage';

export default function HeroCard({
  title = 'card-image',
  imageUrl,
  onClick,
  className,
}: HeroCardProps) {
  return (
    <div className={clsx(styles.card, styles.hero, className)} onClick={onClick}>
      <div className={styles.imageWrapper}>
        {imageUrl && <CustomImage src={imageUrl} alt={title} className={styles.image} />}
        <div className={styles.overlay} />
      </div>
      {title && <h3 className={styles.title}>{title}</h3>}
    </div>
  );
}
