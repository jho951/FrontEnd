'use client';

import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

import { useScrollLock } from '@/hooks/useScroll';
import { PreviewModalProps } from '@/types';

import styles from '@/styles/editor/PreviewModal.module.css';

export default function PreviewModal({ content, onClose }: PreviewModalProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useScrollLock(mounted);

  useEffect(() => {
    setMounted(true);
    const timeout = setTimeout(() => setVisible(true), 10);
    return () => {
      setMounted(false);
      setVisible(false);
      clearTimeout(timeout);
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className={`${styles.overlay} ${visible ? styles.show : ''}`} onClick={onClose}>
      <div
        className={`${styles.modal} ${visible ? styles.show : ''}`}
        onClick={e => e.stopPropagation()}
      >
        <header className={styles.header}>
          <h2>미리보기</h2>
          <button onClick={onClose} className={styles.closeBtn}>
            닫기
          </button>
        </header>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>,
    document.body,
  );
}
