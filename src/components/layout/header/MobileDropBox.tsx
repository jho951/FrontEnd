'use client';

import { motion, AnimatePresence } from 'framer-motion';

import LinkButton from '@/components/common/button/LinkButton';

import { NAV_LINK } from '@/constants';

import type { HeaderMenuOpenProps } from '@/types';

import styles from '@/styles/header/MobileDropBox.module.css';

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
          {NAV_LINK.map(ele => (
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
