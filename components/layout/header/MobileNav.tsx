import { useState } from 'react';
import Link from 'next/link';

import Icon from '@/components/common/icon/Icon';
import DropdownWrapper from '@/components/common/animation/DropdownWrapper';

import { NAV_LINK } from '@/constants';
import { HeaderMenuOpenProps } from '@/types';

import styles from '@/styles/header/MobileNav.module.css';

export default function MobileNav({ isOpen, onClick }: HeaderMenuOpenProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <nav
      className={`${styles.container} ${isOpen ? styles.open : styles.closed}`}
      aria-hidden={!isOpen}
    >
      {NAV_LINK.map((item, idx) => (
        <div key={item.id} className={styles.section}>
          {item.children ? (
            <div className={styles.itemWrapper}>
              <button
                className={styles.toggle}
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`mobile-submenu-${idx}`}
                aria-haspopup="true"
              >
                {item.label}
                <span
                  className={`${styles.iconWrapper} ${openIndex === idx ? styles.iconOpen : ''}`}
                >
                  <Icon name="arrow" size={20} />
                </span>
              </button>
              <DropdownWrapper isOpen={openIndex === idx} id="gnb-children">
                <ul id={`mobile-submenu-${idx}`} className={styles.dropdown}>
                  {item.children.map(sub => (
                    <li key={sub.href}>
                      <Link href={sub.href} className={styles.link} onClick={onClick}>
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </DropdownWrapper>
            </div>
          ) : (
            <Link href={item.href ?? '#'} className={styles.link} onClick={onClick}>
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
