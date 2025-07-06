import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main id="#main-content" className={styles.main}>
        <div className={styles.test}></div>
      </main>
    </div>
  );
}
