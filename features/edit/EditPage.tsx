'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { marked } from 'marked';

import PreviewModal from '@/components/common/editor/PreviewModal';
import MarkdownEditor from '@/components/common/editor/MarkdownEditor';

import { useAutosave } from '@/hooks';
import { Locale } from '@/types';

import styles from '@/styles/features/EditPage.module.css';

export default function EditPage({ lang }: { lang: Locale }) {
  const [value, setValue] = useState('**Hello Markdown!**');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<string>('');

  // 🚀 1. 로컬스토리지 초기값 불러오기
  useEffect(() => {
    const saved = localStorage.getItem('autosave-draft');
    if (saved) setValue(saved);
  }, []);

  // 💾 2. 자동 저장 (2초마다)
  useAutosave(value, 2000, content => {
    localStorage.setItem('autosave-draft', content);
    console.log('✅ 임시 저장됨');

    // if (userLoggedIn) {
    //   api.post('/autosave', { content }); // 서버에도 저장
    // }
  });

  // 👁️ 미리보기
  const handlePreview = async () => {
    const html = await marked.parse(value);
    setModalContent(html);
    setShowModal(true);
  };

  return (
    <motion.section
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <header className={styles.header}>
        <h1>✍️ 글 작성하기</h1>
        <p className={styles.subtext}>마크다운을 활용해 멋진 글을 작성하세요</p>
      </header>

      <div className={styles.editorWrapper}>
        <MarkdownEditor value={value} onChange={val => setValue(val ?? '')} />
      </div>

      <div className={styles.actionRow}>
        <button className={styles.saveBtn}>💾 저장하기</button>
        <button className={styles.previewBtn} onClick={handlePreview}>
          👁️ 미리보기
        </button>
      </div>

      {showModal && <PreviewModal content={modalContent} onClose={() => setShowModal(false)} />}
    </motion.section>
  );
}
