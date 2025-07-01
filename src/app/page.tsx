import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.test}>
          <span>HEADER test</span>
        </div>
      </main>
    </div>
  );
}
