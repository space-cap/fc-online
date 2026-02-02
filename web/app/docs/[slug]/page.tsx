import { getDocContent, getDocSlugs } from '@/lib/docs';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { components } from '@/components/MDXComponents';
import { HeroImage } from '@/components/HeroImage';

export async function generateStaticParams() {
    const slugs = getDocSlugs();
    return slugs.map((slug) => ({
        slug: slug.replace(/\.md$/, ''),
    }));
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const decodeSlug = decodeURIComponent(slug);
    const doc = await getDocContent(decodeSlug);

    // Determine Hero Image based on slug (Simple mapping logic)
    // In a real app, this could be in frontmatter
    const heroImageSrc = `/images/${slug}.png`;
    // We will ensure these images exist or fallback

    return (
        <div className="max-w-5xl mx-auto py-10 px-6">
            <HeroImage
                src={heroImageSrc}
                title={doc.title}
                subtitle="FC ONLINE MASTER GUIDE"
            />
            <article className="prose dark:prose-invert max-w-none">
                <MDXRemote source={doc.content} components={components} />
            </article>
        </div>
    );
}
