'use client';
import { useRouter } from 'next/navigation';

export default function PostModal({ params }: { params: { id: string } }) {
  const router = useRouter();

  const close = () => router.back();

  return (
    <div onClick={close}>
      <div onClick={e => e.stopPropagation()} style={{ background: '#fff', padding: '2rem' }}>
        <h2>Post ID: {params.id}</h2>
        <button onClick={close}>닫기</button>
      </div>
    </div>
  );
}
