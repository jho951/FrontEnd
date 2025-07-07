import Link from 'next/link';
import Icon from '@/components/common/icon/Icon';
import styles from '@/styles/accessibility/FooterSns.module.css';

export default function FooterSns() {
  return (
    <div className={styles.bottom}>
      <p className={styles.copy}>&copy; 2025 YourCompany, Inc. All rights reserved.</p>
      <div className={styles.languageAndIcons}>
        <span>🌐 English</span>
        <div className={styles.icons}>
          <Link href="/rss.xml" target="_blank" rel="noopener noreferrer" aria-label="">
            <Icon name="rss" size={22} />
          </Link>
          <Link
            href="https://github.com/jho951"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Icon name="gitHub" size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
}
