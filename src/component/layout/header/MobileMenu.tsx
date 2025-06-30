import Link from 'next/link';
import styles from './MobileMenu.module.css';

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.menu} onClick={e => e.stopPropagation()}>
        <Link href="/about" onClick={onClose}>
          About
        </Link>
        <Link href="/posts" onClick={onClose}>
          Posts
        </Link>
        <Link href="/tags" onClick={onClose}>
          Tags
        </Link>
        <Link href="/contact" onClick={onClose}>
          Contact
        </Link>
      </div>
    </div>
  );
}
