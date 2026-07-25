"use client"
import { PostMarkdownBody } from "@/components/post-markdown-body"
import { usePostDetailQuery } from "@/hooks/api/use-posts"
import { formatPostDate } from "@/lib/format-date"
type PostDetailContentProps = {
  slug: string
}
export function PostDetailContent({ slug }: PostDetailContentProps) {
    const { data: post } = usePostDetailQuery(slug)
    const releasedAt = formatPostDate(post.releasedAt)
    return (
    <article className="flex flex-col gap-6">
        <header className="flex flex-col gap-3 border-b border-gray-200 pb-6">
            <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                {post.title}
            </h1>
            {releasedAt ? (
                <p className="text-sm text-gray-500">{releasedAt}</p>
            ) : null}
            {post.shortDescription ? (
                <p className="text-base text-gray-600">{post.shortDescription}</p>
            ) : null}
        </header>
        <PostMarkdownBody content={post.body} />
    </article>
    )
}