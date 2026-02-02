import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const docsDirectory = path.join(process.cwd(), 'content');

export function getDocSlugs() {
    if (!fs.existsSync(docsDirectory)) {
        return [];
    }
    return fs.readdirSync(docsDirectory).filter((file) => file.endsWith('.md'));
}

export type DocData = {
    slug: string;
    title: string;
    [key: string]: any;
};

export function getAllDocs(): DocData[] {
    const slugs = getDocSlugs();
    const docs = slugs.map((slug) => {
        const realSlug = slug.replace(/\.md$/, '');
        const fullPath = path.join(docsDirectory, slug);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        // Default title from filename if not in frontmatter
        let title = data.title;
        if (!title) {
            // Remove number prefix (e.g. "01_") and extension
            title = realSlug.replace(/^\d+_/, '').replace(/_/g, ' ');
        }

        return {
            slug: realSlug,
            title,
            ...data,
        };
    });

    // Sort by filename (alphabetical sort works for numbered prefixes)
    return docs.sort((a, b) => {
        return a.slug > b.slug ? 1 : -1;
    });
}

export async function getDocContent(slug: string) {
    const fullPath = path.join(docsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        throw new Error(`File not found: ${fullPath}`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(content);
    const contentHtml = processedContent.toString();

    let title = data.title;
    if (!title) {
        title = slug.replace(/^\d+_/, '').replace(/_/g, ' ');
    }

    return {
        slug,
        contentHtml,
        title,
        ...data,
    };
}
