import styles from '@/styles/features/LegalModal.module.css';

export default async function LegalModalPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const { slug } = await params;
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <button className={styles.closeButton}>✕</button>
        <h2>모달: {slug}</h2>
        <p>이 내용은 모달로 표시됩니다.</p>
      </div>
    </div>
  );
}
