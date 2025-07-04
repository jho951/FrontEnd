'use client';

import { motion, AnimatePresence } from 'framer-motion';

import { HeaderMenuOpenProps } from '@/header/type/HeaderType';

import LinkButton from '@/button/LinkButton';

import { HEADER_NAV_LINK } from '@/global/constant/routes';

import styles from '@/header/style/MobileDropBox.module.css';

export default function MobileDropBox({ isOpen, onClick }: HeaderMenuOpenProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          className={`${styles.container} ${isOpen ? styles.open : styles.closed}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {HEADER_NAV_LINK.map(ele => (
            <LinkButton
              key={ele.id}
              href={ele.href}
              variant="text"
              className={styles.linkItem}
              onClick={onClick}
            >
              {ele.label}
            </LinkButton>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
