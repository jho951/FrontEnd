import Link from 'next/link';
import { FooterNavProps } from '@/types';

import styles from '@/styles/accessibility/FooterNav.module.css';

export default function FooterNav({ title, links, external = false }: FooterNavProps) {
  return (
    <div>
      <h3 className={styles.columnTitle}>{title}</h3>
      <ul className={styles.linkList}>
        {links.map(link => {
          const key = `${link.label}-${link.href}`;
          if (external || !link.href.startsWith('/')) {
            return (
              <li key={key}>
                <a
                  href={link.href}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </li>
            );
          }

          return (
            <li key={key}>
              <Link href={link.href}>
                <span className={styles.link}>{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
