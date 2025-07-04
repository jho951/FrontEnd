import { HEADER_AUTH_LINK, HEADER_NAV_LINK } from '@/global/constant/routes';

import LinkButton from '@/button/LinkButton';

import styles from '@/header/style/HeaderNav.module.css';

export default function HeaderNav() {
  return (
    <nav className={styles.container}>
      {HEADER_NAV_LINK.map(ele => (
        <LinkButton href={ele.href} variant="text" key={ele.id}>
          {ele.label}
        </LinkButton>
      ))}
      <span className={styles.space} />

      {HEADER_AUTH_LINK.map(ele => (
        <LinkButton href={ele.href} variant="text" key={ele.id}>
          {ele.label}
        </LinkButton>
      ))}
    </nav>
  );
}
