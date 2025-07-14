import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
export async function getMarkdownContent(slug, locale) {
    // content/{locale}/{slug}.mdx 경로 생성
    const filepath = path.join(process.cwd(), 'content', locale, `${slug}.mdx`);
    // 파일이 없으면 null 반환
    if (!fs.existsSync(filepath))
        return null;
    // 파일 읽어서 front-matter 파싱
    const source = fs.readFileSync(filepath, 'utf-8');
    const { content, data } = matter(source);
    // MDX 직렬화
    const mdxSource = await serialize(content, { scope: data });
    return { mdxSource, frontMatter: data };
}
