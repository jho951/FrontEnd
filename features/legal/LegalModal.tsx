'use client';
import { useRouter } from 'next/navigation';
import styles from '@/styles/features/LegalPage.module.css';

export default function LegalModal({ slug }: { slug: string }) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={handleClose}>
          ✕
        </button>
        <h2>모달: {slug}</h2>
        <p>이 내용은 모달로 표시됩니다.</p>
      </div>
    </div>
  );
}
