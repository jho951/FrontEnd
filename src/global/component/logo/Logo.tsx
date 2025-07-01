import Link from 'next/link';
import LogoIcon from '@/global/component/icon/LogoIcon';

import styles from '@/global/component/logo/Logo.module.css';

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <LogoIcon />
      <h1 className={styles.text}>Skill Blog</h1>
    </Link>
  );
};

export default Logo;
