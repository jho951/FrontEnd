import fs from 'fs';
import path from 'path';
const CONTENT_DIR = path.join(process.cwd(), 'content');
export function getAllSlugs() {
    return fs
        .readdirSync(CONTENT_DIR)
        .filter(file => /\.mdx?$/.test(file))
        .map(file => file.replace(/\.mdx?$/, ''));
}
