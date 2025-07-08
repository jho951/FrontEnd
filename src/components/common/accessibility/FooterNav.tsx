import Link from 'next/link';
import { FooterSection } from '@/types';
import styles from '@/styles/accessibility/FooterNav.module.css';

export default function FooterNav({ title, links }: FooterSection) {
  return (
    <div>
      <h3 className={styles.columnTitle}>{title}</h3>
      <ul className={styles.linkList}>
        {links.map(link => {
          const key = `${link.label}-${link.href}`;

          return (
            <li key={key}>
              <Link
                href={link.href}
                target={link.target}
                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                className={styles.link}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
