import Link from 'next/link';

import { FNB } from '@/constants';

import styles from '@/styles/footer/FooterNav.module.css';

export default function FooterNav() {
  return (
    <div className={styles.container}>
      {FNB.map(ele => {
        return (
          <div key={ele.id}>
            <h3 className={styles.columnTitle}>{ele.label}</h3>

            {ele.children && (
              <ul className={styles.linkList}>
                {ele.children.map(link => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      target={link.target}
                      rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                      className={styles.link}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
