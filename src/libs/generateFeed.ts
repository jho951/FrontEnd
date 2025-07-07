import fs from 'fs';
import path from 'path';
import RSS from 'rss';

export interface PostItem {
  title: string;
  slug: string;
  date: string;
  description?: string;
}

export function generateRssFeed(posts: PostItem[]) {
  const siteUrl = 'https://yourdomain.com';

  const feed = new RSS({
    title: 'Your Blog Title',
    description: 'Latest posts from my blog',
    feed_url: `${siteUrl}/feed.xml`,
    site_url: siteUrl,
    language: 'en',
    copyright: `All rights reserved ${new Date().getFullYear()}, Your Name`,
    pubDate: new Date(),
  });

  posts.forEach(post => {
    feed.item({
      title: post.title,
      url: `${siteUrl}/posts/${post.slug}`,
      guid: `${siteUrl}/posts/${post.slug}`,
      description: post.description || '',
      date: new Date(post.date),
    });
  });

  const outputPath = path.join(process.cwd(), 'public', 'feed.xml');
  fs.writeFileSync(outputPath, feed.xml({ indent: true }));
}
