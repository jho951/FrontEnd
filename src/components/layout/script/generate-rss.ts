import { generateRssFeed } from '@/libs/generateFeed';
import { getAllPosts } from '@/libs/post';

const posts = getAllPosts();
generateRssFeed(posts);
