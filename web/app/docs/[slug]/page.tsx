import { getDocContent, getDocSlugs } from '@/lib/docs';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';

export async function generateStaticParams() {
    const slugs = getDocSlugs();
    return slugs.map((slug) => ({
        slug: slug.replace(/\.md$/, ''),
    }));
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Decoding if needed, but usually Next handles URL encoding.
    // The slug comes from URL, e.g. "00_%EA..."
    // getDocContent handles the search.

    const decodeSlug = decodeURIComponent(slug);
    const doc = await getDocContent(decodeSlug);

    return (
        <div className="max-w-4xl mx-auto py-10 px-6">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">{doc.title}</h1>
            <MarkdownRenderer contentHtml={doc.contentHtml} />
        </div>
    );
}
