import FooterInfo from '@/components/layout/footer/FooterInfo';
import FooterNav from '@/components/layout/footer/FooterNav';

import styles from '@/styles/footer/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <FooterNav />
      <FooterInfo />
    </footer>
  );
}

export default Footer;
