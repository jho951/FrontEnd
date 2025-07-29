import CustomImage from '@/components/common/image/CustomImage';
import styles from '@/styles/card/TextCard.module.css';

export default function TextCard() {
  return (
    <div className={styles.card}>
      <CustomImage className={styles.image} src="/images/readwise.png" alt="Readwise" />
      <div className={styles.content}>
        <h3>놓치지 말고, 나만의 방식으로 메모하세요.</h3>
        <p>
          이제 Readwise가 Craft와 동기화됩니다. 아이디어, 노트, 하이라이트를 한곳에 아름답게
          정리하세요.
        </p>
        <button className={styles.button}>자세히 알아보기</button>
      </div>
    </div>
  );
}
