import { Feed } from 'rss';

interface Post {
  title: string;
  description: string;
  slug: string;
  date: string;
  locale: string;
}

export function generateRssFeed(posts: Post[]) {
  const feed = new Feed({
    title: 'Im Yi 블로그',
    description: '개발 블로그 RSS 피드',
    id: 'https://yourdomain.com/',
    link: 'https://yourdomain.com/',
    language: 'ko',
    copyright: `All rights reserved ${new Date().getFullYear()}, Im Yi`,
  });

  posts.forEach(post => {
    feed.addItem({
      title: post.title,
      id: `https://yourdomain.com/${post.locale}/blog/${post.slug}`,
      link: `https://yourdomain.com/${post.locale}/blog/${post.slug}`,
      description: post.description,
      date: new Date(post.date),
    });
  });

  return feed.rss2(); // XML 문자열 반환
}
