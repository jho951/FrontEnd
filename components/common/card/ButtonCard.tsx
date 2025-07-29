import CustomImage from '@/components/common/image/CustomImage';
import styles from '@/styles/card/ButtonCard.module.css';

export default function ButtonCard() {
  return (
    <div className={styles.card} role="button" tabIndex={0}>
      <CustomImage
        className={styles.image}
        src="/images/cta-card-bg.jpg"
        alt="Call to Action Background"
      />
      <button className={styles.cta}>지금 바로 시작하기</button>
    </div>
  );
}
