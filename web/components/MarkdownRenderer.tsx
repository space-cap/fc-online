export function MarkdownRenderer({ contentHtml }: { contentHtml: string }) {
    return (
        <article
            className="prose prose-zinc max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 break-keep"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
    );
}
