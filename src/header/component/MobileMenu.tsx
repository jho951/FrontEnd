'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import { HEADER_NAV_LINK, MENU_VARIANTS } from '@/header/constant/HeaderConstant';

import styles from '@/header/style/MobileMenu.module.css';

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className={styles.menu}
          onClick={e => e.stopPropagation()}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {HEADER_NAV_LINK.map((link, i) => (
            <motion.div
              key={link.href}
              custom={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={MENU_VARIANTS as any}
            >
              <Link href={link.href} onClick={onClose}>
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
