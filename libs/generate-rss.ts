import { generateRssFeed } from './generateFeed.cjs';
import { getAllPosts } from './post';

const posts = getAllPosts();

if (posts.length === 0) {
  console.log('No posts found. Skipping RSS generation.');
  process.exit(0);
}

generateRssFeed(posts);
