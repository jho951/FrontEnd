import Link from 'next/link';

import LogoIcon from '@/icon/constant/logo.svg';

import styles from '@/header/style/Logo.module.css';

const Logo = () => {
  return (
    <Link className={styles.logo} href="/">
      <LogoIcon />
      <h1 className={styles.description}>Skill Blog</h1>
    </Link>
  );
};

export default Logo;
