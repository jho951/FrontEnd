import Link from 'next/link';

import { HEADER_NAV_LINK } from '../constant/HeaderConstant';

import styles from '@/header/style/HeaderNav.module.css';

export default function HeaderNav() {
  return (
    <nav className={styles.nav}>
      {HEADER_NAV_LINK.map(({ href, label }) => (
        <Link key={href} href={href}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
