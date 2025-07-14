import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import Icon from '../icon/Icon';
import DropdownAnimate from '../animation/DropdownAnimate';

import { NAV_LINK } from '../../../constants';
import type { HeaderMenuOpenProps } from '../../../types';

import styles from '@/styles/accessibility/MobileNav.module.css';

export default function MobileNav({ isOpen }: HeaderMenuOpenProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.nav
          className={styles.container}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {NAV_LINK.map((item, idx) => (
            <div key={item.id} className={styles.section}>
              {item.children ? (
                <>
                  <button
                    className={styles.toggle}
                    onClick={() => toggle(idx)}
                    aria-expanded={openIndex === idx}
                    aria-controls={`mobile-submenu-${idx}`}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <Icon
                      className={`${styles.icon} ${openIndex === idx ? styles.open : ''}`}
                      name="arrow"
                      size={20}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === idx && (
                      <DropdownAnimate>
                        <ul id={`mobile-submenu-${idx}`} className={styles.dropdown}>
                          {item.children.map(sub => (
                            <li key={sub.href}>
                              <Link href={sub.href} className={styles.link}>
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </DropdownAnimate>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link href={item.href ?? '#'} className={styles.link}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
