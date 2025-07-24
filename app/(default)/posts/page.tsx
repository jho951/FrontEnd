'use client';
import Link from 'next/link';

export default function PostList() {
  const posts = [{ id: '123', title: 'First Post' }];
  return (
    <div>
      <h1>글 목록</h1>
      {posts.map(post => (
        <Link key={post.id} href={`/posts/${post.id}`} as={`/posts/${post.id}`} scroll={false}>
          <div>{post.title}</div>
        </Link>
      ))}
    </div>
  );
}
