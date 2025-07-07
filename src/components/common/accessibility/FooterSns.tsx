import styles from '@/styles/footer/Footer.module.css';

export default function FooterSns() {
  return (
    <div className={styles.bottom}>
      <div className={styles.languageAndIcons}>
        <span>🌐 English</span>
        <div className={styles.icons}>
          <a href="#">
            <span>📡</span>
          </a>
          <a href="#">
            <span>🅧</span>
          </a>
          <a href="#">
            <span>📷</span>
          </a>
        </div>
      </div>
      <p className={styles.copy}>&copy; 2025 YourCompany, Inc. All rights reserved.</p>
    </div>
  );
}
