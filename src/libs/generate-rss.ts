import { generateRssFeed } from './generateFeed.ts';
import { getAllPosts } from './post.ts';

const posts = getAllPosts();

if (posts.length === 0) {
  console.log('No posts found. Skipping RSS generation.');
  process.exit(0);
}

generateRssFeed(posts);
