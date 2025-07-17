import FooterNav from '@/components/layout/footer/FooterNav';
import FooterSns from '@/components/layout/footer/FooterSns';

import { FOOTER_LINK } from '@/constants/link';

import styles from '@/styles/footer/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        {FOOTER_LINK.map((section, idx) => (
          <FooterNav key={idx} title={section.title} links={section.links} />
        ))}
      </div>
      <FooterSns />
    </footer>
  );
}

export default Footer;
