'use client';

import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { PreviewModalProps } from '@/types/editor/PreviewModal';
import { useScrollLock } from '@/hooks';

import styles from '@/styles/editor/PreviewModal.module.css';

export default function PreviewModal({ content, onClose }: PreviewModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useScrollLock(mounted);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={styles.modal}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={e => e.stopPropagation()}
        >
          <header className={styles.header}>
            <h2>👁️ 미리보기</h2>
            <button onClick={onClose} className={styles.closeBtn}>
              닫기
            </button>
          </header>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
}
