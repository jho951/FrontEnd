import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getAllPosts() {
  const dir = path.join(process.cwd(), 'posts');
  const files = fs.readdirSync(dir);

  return files.map(filename => {
    const slug = filename.replace(/\.md$/, '');
    const fileContent = fs.readFileSync(path.join(dir, filename), 'utf8');
    const { data } = matter(fileContent);
    return {
      title: data.title,
      slug,
      date: data.date,
      description: data.description || '',
    };
  });
}
