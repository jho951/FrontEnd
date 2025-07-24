'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function PostModal({ params }: { params: { id: string } }) {
  const router = useRouter();

  const close = () => router.back();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={close}
    >
      <div onClick={e => e.stopPropagation()} style={{ background: '#fff', padding: '2rem' }}>
        <h2>Post ID: {params.id}</h2>
        <button onClick={close}>닫기</button>
      </div>
    </div>
  );
}
