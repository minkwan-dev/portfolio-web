"use client"

import Image from "next/image"
import { PostMarkdownBody } from "@/components/post-markdown-body"
import { usePostDetailQuery } from "@/hooks/api/use-posts"
import { formatPostDate } from "@/lib/format-date"
import { resolvePostThumbnail } from "@/lib/post-thumbnail"

type PostDetailContentProps = {
  slug: string
}

export function PostDetailContent({ slug }: PostDetailContentProps) {
    const { data: post } = usePostDetailQuery(slug)
    const releasedAt = formatPostDate(post.releasedAt)
    const thumbnailSrc = resolvePostThumbnail(post.thumbnail)
    const isFallback = thumbnailSrc === "/fallback-post.png"

    return (
    <article className="flex flex-col gap-8">
        <header className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                {post.title}
            </h1>
            {releasedAt ? (
                <p className="text-sm text-gray-500">{releasedAt}</p>
            ) : null}
        </header>

        <div className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl bg-gray-100">
            <Image
                src={thumbnailSrc}
                alt={post.title}
                fill
                priority
                sizes="800px"
                className="object-cover"
                unoptimized={!isFallback}
            />
        </div>

        <PostMarkdownBody content={post.body} />
    </article>
    )
}